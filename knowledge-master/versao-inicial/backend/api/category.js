
module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const save = (req, res) => {
        const category = { ...req.body }

        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, 'Nome não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if (category.id) {
            app.db('categories')
                .update(category)
                .where({id: category.id})
                .then( _ => res.status(204).send())
                .catch(err=> res.status(500).send(err))

        } else {
            app.db('categories')
                .insert(category)
                .then(_=> res.status(204).send())
                .catch(err=> res.status(500).send(err))
        }
    }

    const remove = async (req, res)  => {

        try {
            existsOrError(req.params.id, 'Código da Categoria não informado.')

            // Valida se existem subcategorias para a catergoria informada
            const subcategory = await app.db('categories')
                .where({ parentId: req.params.id })
            
            notExistsOrError(subcategory, 'Categoria possui subcategorias e não pode ser excluída.')

            const articles = await app.db('articles')
                .where({ categoryId: req.params.id })

            notExistsOrError(articles, 'Categoria possui artigos associados e não pode ser excluída.')

            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            
            existsOrError(rowsDeleted, 'Categoria não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }

    }

    /*
    Vai montar o path, como se fossem os menus
    Ex: se tiver uma categoria Cadastro, outra Gerais que tem Cadastro como pai, e outra Usuário, que tem Cadastro como pai
    vai retornar a categoria com uma propriedade path no formato "Cadastro > Gerais > Usuário"
    Começa de traz para frente para montar
     */
    const withPath = categories => {
        
        // Pega o pai de uma categoria
        const getParent = (categories, parentId) => {
            let parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null
        }

        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)
            while(parent) {
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId)
            }

            return { ...category, path}
        })

        // Ordena categorias
        categoriesWithPath.sort((a, b) => {
            if (a.path < b.path) return -1
            if (a.path > b.path) return 1
            return 0
        })

        return categoriesWithPath

    }

    const get = (req, res) => {

        app.db('categories') 
            .then(categories => res.json(withPath(categories)))
            .catch(err =>  { console.log(err) 
                res.status(500).send(err)})
    }

    const getById = (req, res) => {
        app.db('categories')
            .where({ id: req.params.id })
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    const toTree = (categories, tree) => {
        // Se tree estiver vazio, ou seja, a primeira vez que entrar, filtra todas as categorias que não tem pai
        // Serão os menus raizes
        if (!tree) tree = categories.filter(c => !c.parentId)

        // console.log("categorias: ", categories)
        // console.log("tree: ", tree)
        
        // Para cada menu raiz
        tree = tree.map(parentNode => {

            // console.log("parentNode: ", parentNode)

            // Função para verificar se uma categoria passada é filha do item atual do map 
            const isChild = node => node.parentId == parentNode.id
            
            //chama de forma recursiva o toTree, passando todas as categorias e passando também apenas as categorias filhas da categoria atual
            parentNode.children = toTree(categories, categories.filter(isChild))
            return parentNode
        })
        return tree
    }

    const getTree = (req, res) => {
        app.db('categories')
            .then(categories => res.json(toTree(withPath(categories))))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getTree }
}
