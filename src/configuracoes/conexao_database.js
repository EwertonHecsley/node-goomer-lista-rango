require('dotenv').config();
const knex = require('knex');

const configuracaoKnex = {
    client: process.env.CLIENT,
    connection: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_DATABASE
    }
};

const conexaoDataBase = knex(configuracaoKnex)

module.exports = conexaoDataBase