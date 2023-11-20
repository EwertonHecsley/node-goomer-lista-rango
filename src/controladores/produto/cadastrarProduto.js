const knex = require('../../configuracoes/conexao_database');
const { uploadImagem } = require('../../configuracoes/conexao_aws');


const cadastrarProduto = async (req, res) => {
    const { nome, preco_produto, categoria_produto_id } = req.body;

    try {
        let produto = await knex('produtos')
            .insert({ nome, preco_produto, categoria_produto_id })
            .returning('*');

        if (req.file) {
            const { originalname, buffer, mimetype } = req.file;
            const { id } = produto[0]

            const imagem = await uploadImagem(`produtos/${id}/${nome}/${originalname}`, buffer, mimetype);

            produto = await knex('produtos').update({ foto: imagem.url }).where({ id }).returning('*');
        }

        return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso.', produto: produto[0] })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    cadastrarProduto
}