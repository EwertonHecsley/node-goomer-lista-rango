const knex = require('../../configuracoes/conexao_database');
const { format } = require('date-fns');

const intermediarioDetalharRestaurante = async (req, res, next) => {
    const { id } = req.params;
    try {
        const restaurantesBd = await knex('restaurantes')
            .select('restaurantes.*', 'enderecos.*')
            .leftJoin('enderecos', 'enderecos.id', 'restaurantes.endereco')
            .where('restaurantes.id', id)
            .first();
        if (!restaurantesBd) {
            return res.status(404).json({ mensagem: 'Restaurante não encontrado com esse ID.' });
        };
        const restaurantesFormatados = {
            ...restaurantesBd,
            data_cadastro: format(restaurantesBd.data_cadastro, 'dd/MM/yyyy')
        }
        req.restaurante = restaurantesFormatados;
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioDetalharRestaurante
}