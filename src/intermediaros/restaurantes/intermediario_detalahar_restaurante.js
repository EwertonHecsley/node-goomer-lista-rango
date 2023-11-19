const knex = require('../../configuracoes/conexao_database');

const intermediarioDetalharRestaurante = async (req, res, next) => {
    const { id } = req.params;
    try {
        const restaurante = await knex('restaurantes')
            .select('restaurantes.*', 'enderecos.*')
            .leftJoin('enderecos', 'enderecos.id', 'restaurantes.endereco')
            .where('restaurantes.id', id)
            .first();
        if (!restaurante) {
            return res.status(404).json({ mensagem: 'Restaurante não encontrado com esse ID.' });
        };
        req.restaurante = restaurante;
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioDetalharRestaurante
}