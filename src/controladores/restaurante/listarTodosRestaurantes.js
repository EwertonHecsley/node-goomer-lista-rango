const knex = require('../../configuracoes/conexao_database');
const { format } = require('date-fns');

const listarTodosRestaurantes = async (_req, res) => {
    try {
        const restaurantesBd = await knex('restaurantes')
            .select(
                'restaurantes.*',
                'enderecos.*'
            )
            .leftJoin('enderecos', 'enderecos.id', 'restaurantes.endereco')
            .orderBy('restaurantes.id');

        const restaurantesFormatados = restaurantesBd.map(restaurante => ({
            ...restaurante,
            data_cadastro: format(restaurante.data_cadastro, 'dd/MM/yyyy')
        }));

        return res.status(200).json(restaurantesFormatados);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', resposta: error.message });
    }
};


module.exports = {
    listarTodosRestaurantes
}