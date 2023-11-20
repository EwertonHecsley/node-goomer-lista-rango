const knex = require('../../configuracoes/conexao_database');

const detalharProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await knex('produtos').where({ id }).first();
        return res.status(200).json(produto)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    detalharProduto
}