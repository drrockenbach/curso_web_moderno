const app = require('express')()
const consign = require('consign')

// banco de dados já configurado com knex
const db = require('./config/db')

// adiciona no app do express a instância do banco
app.db = db;

// O consign fica responsável por passar a instância de app para o middlewares.js
// E lê as pastas definidas também, já carregando os métodos dos arquivos dessas pastas. olhar routes.js para melhor entendimento
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js') // É necessário especificar aqui pois se não pode ocorrer de dar erro ao subir o servidor, pois ele carrega o "user.js" antes do validation, aí ele não reconhece o validation dentro do user
    .then('./api')
    .then('./config/routes.js')
    .into(app) 

app.listen(3000, () => {
    console.log("Backend executando com sucesso...")
})