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

    try {
        const endereco = await knex('enderecos')
            .insert({ estado, cidade, logradouro, bairro, cep })
            .returning('id');

        let restaurante = await knex('restaurantes')
            .insert({ nome, horario, endereco: endereco[0].id })
            .returning('*');

        if (req.file) {
            const { originalname, buffer, mimetype } = req.file;
            const { id } = restaurante[0];

            const imagem = await uploadImagem(`restaurantes/${id}/${nome}/${originalname}`, buffer, mimetype);

            restaurante = await knex('restaurantes')
                .update({ foto: imagem.url })
                .where({ id })
                .returning('*')
        };
        return res.status(201).json({ mensagem: 'Restaurante cadastrado com sucesso.', restaurante: restaurante[0] });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    novoRestaurante
}