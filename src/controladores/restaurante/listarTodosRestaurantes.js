const knex = require('../../configuracoes/conexao_database');

const listarTodosRestaurantes = async (_req, res) => {
    try {
        const restaurantesBd = await knex('restaurantes')
            .orderBy('id');
        return res.status(200).json(restaurantesBd)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', resposta: error.message })
    }
};

module.exports = {
    listarTodosRestaurantes
}