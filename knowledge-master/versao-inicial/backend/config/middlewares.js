const bodyParser = require('body-parser')
const cors = require('cors')

// app - instância do express criada no index.js
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}