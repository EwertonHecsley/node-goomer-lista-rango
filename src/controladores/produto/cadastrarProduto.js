const knex = require('../../configuracoes/conexao_database');
const { uploadImagem } = require('../../configuracoes/conexao_aws');


const cadastrarProduto = async (req, res) => {
    const { nome, preco_produto, categoria_produto_id, promocao } = req.body;
    const { originalname, buffer, mimetype } = req.file;
    try {
        const imagem = await uploadImagem(`produtos/${nome}/${originalname}`, buffer, mimetype);
        const produto = await knex('produtos')
            .insert({ nome, preco_produto, categoria_produto_id, promocao, foto: imagem.url })
            .returning('*');
        return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso.', produto: produto[0] })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    cadastrarProduto
}