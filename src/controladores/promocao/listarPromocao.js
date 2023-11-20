const knex = require('../../configuracoes/conexao_database');

const listarPromocoes = async (_req, res) => {
    try {
        const promocao = await knex('promocoes')
            .select('promocoes.*', 'produtos.nome', 'produtos.preco_produto')
            .leftJoin('produtos', 'produtos.id', 'promocoes.produto_id')
            .orderBy('produtos.id')
        return res.status(200).json(promocao)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    listarPromocoes
}