const knex = require('../../configuracoes/conexao_database');
const { buscarImagem, excluirImagem, uploadImagem } = require('../../configuracoes/conexao_aws');

const atualizarRestaurante = async (req, res) => {
    const {
        id
    } = req.params;
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
        let imagem = null;

        if (req.file) {
            imagem = await buscarImagem(nome);

            if (imagem.length > 0) {
                await excluirImagem(imagem[0].Key);
            }

            imagem = await uploadImagem(`restaurantes/${nome}/${originalname}`, buffer, mimetype);
        };

        const novoEndereco = await knex('enderecos')
            .update({ estado, cidade, logradouro, bairro, cep })
            .where({ id })
            .returning('id');

        const novoRestaurante = await knex('restaurantes')
            .update({ nome, horario, foto: imagem.url, endereco: novoEndereco[0].id })
            .where({ id })
            .returning('*');

        return res.status(200).json({ mensagem: 'Restaurante Atualizado com sucesso.' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    atualizarRestaurante
}