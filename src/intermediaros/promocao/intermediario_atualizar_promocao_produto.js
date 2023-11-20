const knex = require('../../configuracoes/conexao_database');

const intermediarioAtualizarPromocaoProduto = async (req, res, next) => {
    const { id } = req.params;
    const { produto_id } = req.body;
    try {
        const promocao = await knex('promocoes').where({ id }).first();
        if (!promocao) {
            return res.status(404).json({ mensagem: 'Promoção não encontrado para esse ID.' })
        };

        const produto = await knex('produtos').where({ id: produto_id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioAtualizarPromocaoProduto
}