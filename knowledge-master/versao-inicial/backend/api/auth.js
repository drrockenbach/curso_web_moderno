const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()
        
        let isMatch = false

        if (user) {
            isMatch = bcrypt.compareSync(req.body.password, user.password)
        } 

        if (!user || !isMatch) return res.status(401).send('Usuário ou senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        /* Conteúdo do token */
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, /*Emitido em - padrão jwt*/
            exp: now + (60 * 60 * 24 * 3) /* nome do campo padrão jwt 3 dias de duração*/
        }
        
        res.json( {
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    // Aqui caso o token esteja perto de expirar ou expirado, poderia renovar o token
                    return res.send(true)
                }
            }
        } catch (e) {
            // problema com o token
        }
        
        res.send(false)
    }

    return { signin, validateToken }
}