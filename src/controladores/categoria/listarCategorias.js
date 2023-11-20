const knex = require('../../configuracoes/conexao_database');

const listarCategoriasProduto = async (req, res) => {
    try {
        const categorias = await knex('categorias');
        return res.status(200).json(categorias)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    listarCategoriasProduto
}