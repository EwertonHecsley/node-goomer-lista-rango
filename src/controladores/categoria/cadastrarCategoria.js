const knex = require('../../configuracoes/conexao_database');

const cadastrarCategoriaProduto = async (req, res) => {
    const { descricao } = req.body;
    try {
        const categoria = await knex('categorias').insert({ descricao }).returning('*');
        return res.status(201).json({ mensagem: 'Categoria cadastrada com sucesso.', categoria: categoria[0] })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    cadastrarCategoriaProduto
}