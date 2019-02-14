const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) // Isso quer dizer, que dentro da pasta raiz, ".", é pra servir todos os arquivos estáticos, ou seja, todos os arquivos.
                             // Se tirar isso, não terá acesso ao index.html, por exemplo

app.use(bodyParser.urlencoded({extended: true})) // Se vier um submit com o formulário, esse será o responsável por transformar em objeto. Aplica para todas as requisições

// app.use('/clintes', bodyParser.urlencoded({extended: true})) // Da pra especificar assim também, dizendo em qual url aplicar

app.use(bodyParser.json()) // Se vier um json no body da requisição, esse será o responsável por transformar em objeto


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload') // destino. A pasta deve existir
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // Concatena a data atual (em mili), para evitar que mande um arquivo com o mesmo nome e seja sobrescrito
    }
})

const upload = multer({storage}).single('arquivo') // single('arquivo') diz que na requisição o arquivo vai vir com esse nome, não o arquivo físico em sí, mas o nome do input

app.post('/upload', (req, res) => {
    upload(req, res, err => { 
        if (err) {
            return res.end('Ocorreu erro')
        }
        res.end("Concluído com sucesso")
    })
})

app.post('/formulario', (req, res) => {
    setTimeout(() => { // Timeout só pra simular uma demora maior
        res.send({
            ...req.body,
            id: 1
        })
    }, 2000);
    
})

app.get('/parOuImpar', (req, resp) => {
    // req.body
    // req.query 
    // req.params

    const par = parseInt(req.query.numero) % 2 === 0

    resp.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8081, () => console.log('Executando servidor....'))