const knex = require('../../configuracoes/conexao_database');

const deletarPromocao = async (req, res) => {
    const { id } = req.params;
    try {
        await knex('promocoes').where({ id }).del();
        return res.status(200).json({ mensagem: 'Promoção deletada com sucesso.' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    deletarPromocao
}