const knex = require('../../configuracoes/conexao_database');

const intermediarioCadastrarProduto = async (req, res, next) => {
    const { categoria_produto_id } = req.body;
    try {
        const produto = await knex('categorias').where({ id: categoria_produto_id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Categoria de produto não encontrado.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioCadastrarProduto
}