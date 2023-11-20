const knex = require('../../configuracoes/conexao_database');

const atualizarCategoriaProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    try {
        await knex('categorias').update({ descricao }).where({ id });
        return res.status(200).json({ mensagem: 'Categoria atualizada com sucesso.' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    atualizarCategoriaProduto
}