const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }

        console.log(user)

        if (req.params.id) user.id = req.params.id

        /* se a url de origem form diferente de /users, não permite cadastrar usuário como admin.
        Isso por que quando o usuário se cadastra, a partir de /signup, não pode permitir cadastrar como admin. Apenas outro admin pode criar um admin */
        if (!req.originalUrl.startsWith('/users')) user.admin = false

        /* Se o usuário da requisição, usuário logado, não for admin, não permite cadastrar outro usuário como admin */
        if (!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informado')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senha e confirmação diferentes')
            
            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            
            if (!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            console.log('Erro validações: ', msg)
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword // não vai inserir no banco

        if (user.id) {
            app.db('users')
                .update(user)
                .where({id: user.id})
                .whereNull('deletedAt')
                .then(res.status(204).send()) // 204 deu tudo certo mas não tem retorno
                .catch(err => res.status(500).send(err.toString()))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err.toString()))
        }
    }

    const get = (req, res) => {
        app.db('users').select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        const id = req.params.id
        app.db('users').select('id', 'name', 'email', 'admin')
            .where({id : id})
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id})
            
            notExistsOrError(articles, 'Usuário possui artigo associados.')

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })

            existsOrError(rowsUpdated, 'Usuário não foi encontrado.')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    return {save, get, getById, remove}
}