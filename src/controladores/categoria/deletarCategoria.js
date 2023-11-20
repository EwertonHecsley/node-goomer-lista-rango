const knex = require('../../configuracoes/conexao_database');

const deletarCategoriaProduto = async (req, res) => {
    const { id } = req.params;
    try {
        await knex('categorias').where({ id }).del();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    deletarCategoriaProduto
}