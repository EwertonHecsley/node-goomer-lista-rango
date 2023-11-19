const knex = require('../../configuracoes/conexao_database');
const { excluirImagem, buscarImagem } = require('../../configuracoes/conexao_aws');

const deletarRestaurante = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.restaurante;
    try {
        await knex('restaurantes').where({ id }).del();

        const imagem_bucket = await buscarImagem(nome);
        if (imagem_bucket.length > 0) {
            await excluirImagem(imagem_bucket[0].Key);
        };

        return res.status(200).json({ mensagem: 'Restaurante deletado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    deletarRestaurante
}