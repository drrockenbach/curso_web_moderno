const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) // Isso quer dizer, que dentro da pasta raiz, ".", é pra servir todos os arquivos estáticos, ou seja, todos os arquivos.
app.use(bodyParser.urlencoded({extended: true})) // Se vier um submit com o formulário, esse será o responsável por transformar em objeto. Aplica para todas as requisições

// app.use('/clintes', bodyParser.urlencoded({extended: true})) // Da pra especificar assim também, dizendo em qual url aplicar

app.use(bodyParser.json()) // Se vier um json no body da requisição, esse será o responsável por transformar em objeto


app.get('/teste', (req, res) => res.send('OK'))

app.listen(8081, () => console.log('Executando servidor....'))