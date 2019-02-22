const mongoose = require('mongoose')

// para iniciar o mongodb utilizar o comando "mongod"


mongoose.connect('mongodb://localhost:kanowledge_stats', { useNewUrlParser: true })
.catch(e => {
        const msg = 'Não foi possível conectar com o MongoDB'
        // '\x1b[41m%s\x1b[37m' - para colocar em vermelho no background e branco na letra
        // '\x1b[0m' - reseta e fica vermelhors
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })