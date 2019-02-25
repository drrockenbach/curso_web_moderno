// Update with your config settings.
// ******************* Instruções *******************
/*
Para criar este arquivo, após ter instalado o knex global, com comando npm i -g knex.
Rodar o comando knex init. Esse é o arquivo de configuração de conexão com o banco de dados (bancos relacionais)
Esse arquivo vai ser importado dentro de config/db.js

***************************************
Comandos knex para criação das tabelas:
Vai criar uma pasta migration com arquivos onde serão criadas as tabelas do sistema

knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles

- ****Criar o banco**** 
- para rodar essas migrations utilizar o comando knex migrate:latest 
- isso vai rodar todas até a última criada
- No banco é criada uma tabela, knex_migrations, que controla as migrations que já foram executadas

- *** Da pra executar isso pelo código, conforme exemplo no arquivo db.js. Porém, evitar isso para produção.

- *** Rollback ****
- para executar o rollback utilizar o comando "knex migrate:rollback"
- Na tabela de controle, tem um campo chamado batch. Ali tem um id. A primeira vez que rodar o rollback, vai executar só os scripts da última criação.
  Ex: Se tiver sido rodado primeiro o migration de users, esse vai ter o batch = 1. E depois rodar os demais, os outros vão ficar com batch = 2. 
      Rodando o knex migrate:rollback, vai dar rollback apenas nos batch = 2. Para dar rollback no batch = 1, teria que rodar novamente

*/

const { db } = require('./.env')

module.exports = {

    client: 'postgresql',
    // connection: {
    //   database: 'knowledge',
    //   user:     'postgres',
    //   password: 'root'
    // },
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
