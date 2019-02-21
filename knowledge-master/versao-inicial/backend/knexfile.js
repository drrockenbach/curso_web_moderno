// Update with your config settings.
// ******************* Instruções *******************
/*
Para criar este arquivo, após ter instalado o knex global, com comando npm i -g knex.
Rodar o comando knex init. Esse é o arquivo de configuração de conexão com o banco de dados (bancos relacionais)
Esse arquivo vai ser importado dentro de config/db.js

***************************************
Comandos knex para criação das tabelas:
Vai criar uma pasta migration com arquivos... Será explicado na próxima aula

knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles

*/


module.exports = {

    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};