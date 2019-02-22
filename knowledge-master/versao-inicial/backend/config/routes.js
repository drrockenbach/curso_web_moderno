const admin = require('./admin')

module.exports = app => {

    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
        

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))// Para insert quando for post
        .get(admin(app.api.user.get))
        // O próprio consign, quando for dito para ele carregar a pasta api, lá dentro do arquivo index.js, vai disponibilizar os métodos do users.js
        // O caminho fica igual o caminha das pastas. No caso a pasta é api, arquivo user.js método save, por isso fica app.api.user.save

    app.route('/users/:id') // Para update quando for put
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
    
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.user.getById))
    
    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))
    
    // Cuidado com a Ordem! Deve ficar antes de /categories/:id, pois se não pode interpretar o tree como o param :id
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))
    
    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)
}
