// importa arquivo de config de banco
const config = require('../knexfile.js')

// instancia knex com as configs
const knex = require('knex')(config)


// Executa as migrations ao iniciar o projeto. Caso as migrations já estejam criadas, não vai criar novamente. Isso é controlado pela tabela knex_migrations.
// Evitar utilizar isso para produção
// knex.migrate.latest([config])

module.exports = knex
