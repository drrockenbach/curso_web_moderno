const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')

console.log(saudacao.ola)

// Módulo interno do node
const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8082)