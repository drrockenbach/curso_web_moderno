const app = require('express')()
const consign = require('consign')

// O consign fica responsável por passar a instância de app para o middlewares.js
// E lê as pastas definidas também, já carregando os métodos dos arquivos dessas pastas. olhar routes.js para melhor entendimento
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app) 

app.listen(3000, () => {
    console.log("Backend executando com sucesso...")
})