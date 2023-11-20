const knex = require('../../configuracoes/conexao_database');

const listarProdutos = async (req, res) => {
    try {
        const produto = await knex('produtos')
        return res.status(200).json(produto)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    listarProdutos
}