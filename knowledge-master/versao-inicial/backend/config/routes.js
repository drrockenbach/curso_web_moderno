module.exports = app => {
    app.route('/users') 
        .post(app.api.user.save)// Para insert quando for post
        .get(app.api.user.get)
        // O próprio consign, quando for dito para ele carregar a pasta api, lá dentro do arquivo index.js, vai disponibilizar os métodos do users.js
        // O caminho fica igual o caminha das pastas. No caso a pasta é api, arquivo user.js método save, por isso fica app.api.user.save

    app.route('/users/:id') // Para update quando for put
        .put(app.api.user.save)
    
    app.route('/users/:id')
        .get(app.api.user.getById)
    
    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)
    
    // Cuidado com a Ordem! Deve ficar antes de /categories/:id, pois se não pode interpretar o tree como o param :id
    app.route('/categories/tree')
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)
}