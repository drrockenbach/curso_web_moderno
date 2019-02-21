// importa arquivo de config de banco
const config = require('../knexfile.js')

// instancia knex com as configs
const knex = require('knex')(config)

module.exports = knex
