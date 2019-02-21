const app = require('express')()
const consign = require('consign')

// O consign fica responsável por passar a instância de app para o middlewares.js
consign()
    .then('./config/middlewares.js')
    .into(app) 

app.listen(3000, () => {
    console.log("Backend executando com sucesso...")
})