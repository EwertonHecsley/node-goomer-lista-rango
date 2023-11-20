const knex = require('../../configuracoes/conexao_database');

const intermediarioDeletarCategoriaProduto = async (req, res, next) => {
    const { id } = req.params;
    try {
        const categoria = await knex('categorias').where({ id }).first();
        if (!categoria) {
            return res.status(404).json({ mensagem: 'Categoria não encontrada.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioDeletarCategoriaProduto
}