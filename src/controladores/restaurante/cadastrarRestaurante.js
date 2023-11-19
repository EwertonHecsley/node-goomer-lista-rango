const knex = require('../../configuracoes/conexao_database');

const novoRestaurante = async (req, res) => {
    return res.send(req.endereco)
};

module.exports = {
    novoRestaurante
}