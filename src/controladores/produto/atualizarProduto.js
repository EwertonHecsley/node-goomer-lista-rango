const knex = require('../../configuracoes/conexao_database');
const { buscarImagem, excluirImagem, uploadImagem } = require('../../configuracoes/conexao_aws');

const atualizarProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, preco_produto, categoria_produto_id } = req.body;

    try {
        let imagem = null;

        if (req.file) {
            const { originalname, buffer, mimetype } = req.file;
            imagem = await buscarImagem(id);

            if (imagem.length > 0) {
                await excluirImagem(imagem[0].Key);
            }

            imagem = await uploadImagem(`produtos/${nome}/${originalname}`, buffer, mimetype);
        };
        await knex('produtos')
            .update({ nome, preco_produto, categoria_produto_id, foto: imagem.url })
            .where({ id })
        return res.status(200).json({ mensagem: 'Produto atualizado com sucesso.' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    atualizarProduto
}