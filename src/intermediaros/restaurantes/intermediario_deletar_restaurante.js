const knex = require('../../configuracoes/conexao_database');

const intermediarioDeletarRestaurante = async (req, res, next) => {
    const { id } = req.params;
    try {
        const restauranteBd = await knex('restaurantes').where({ id }).first();
        if (!restauranteBd) {
            return res.status(404).json({ mensagem: 'Restaurante não encontrado com esse ID.' })
        };
        req.restaurante = restauranteBd
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioDeletarRestaurante
}