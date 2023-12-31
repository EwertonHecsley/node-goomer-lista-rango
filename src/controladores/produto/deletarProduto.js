const knex = require('../../configuracoes/conexao_database');
const { excluirImagem, buscarImagemProdutos } = require('../../configuracoes/conexao_aws');

const deletarProduto = async (req, res) => {
    const { id } = req.params;

    try {
        await knex('produtos').where({ id }).del();

        const imagem_bucket = await buscarImagemProdutos(id);

        if (imagem_bucket.length > 0) {
            await excluirImagem(imagem_bucket[0].Key);
        };

        return res.status(200).json({ mensagem: 'Produto deletado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    deletarProduto
}