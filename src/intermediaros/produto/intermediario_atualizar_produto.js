const knex = require('../../configuracoes/conexao_database');

const intermediaroAtualizarProduto = async (req, res, next) => {
    const { id } = req.params;
    try {
        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado com esse ID.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediaroAtualizarProduto
}