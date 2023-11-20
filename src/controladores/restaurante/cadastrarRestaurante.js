const knex = require('../../configuracoes/conexao_database');
const { uploadImagem } = require('../../configuracoes/conexao_aws');

const novoRestaurante = async (req, res) => {
    const {
        nome,
        horario,
        cep,
    } = req.body;
    const {
        estado,
        cidade,
        logradouro,
        bairro
    } = req.endereco;
    const {
        originalname,
        buffer,
        mimetype
    } = req.file;

    try {
        const imagem = await uploadImagem(`restaurantes/${nome}/${originalname}`, buffer, mimetype);
        const endereco = await knex('enderecos')
            .insert({ estado, cidade, logradouro, bairro, cep })
            .returning('id');
        const restaurante = await knex('restaurantes')
            .insert({ nome, horario, foto: imagem.url, endereco: endereco[0].id })
            .returning('*');
        return res.status(201).json({ mensagem: 'Restaurante cadastrado com sucesso.', restaurante: restaurante[0] });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    novoRestaurante
}