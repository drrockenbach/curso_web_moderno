module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        // O próprio consign, quando for dito para ele carregar a pasta api, lá dentro do arquivo index.js, vai disponibilizar os métodos do users.js
        // O caminho fica igual o caminha das pastas. No caso a pasta é api, arquivo user.js método save, por isso fica app.api.user.save
}