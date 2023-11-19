const knex = require('../../configuracoes/conexao_database');
const buscaCep = require('cep-promise');

const intermediarioAtualizarRestaurante = async (req, res, next) => {
    const { cep } = req.body;
    const { id } = req.params;

    try {
        const { state, city, neighborhood, street } = await buscaCep(cep);
        req.endereco = {
            cidade: city,
            logradouro: street,
            bairro: neighborhood,
            cep,
            estado: state
        };
        const restaurante = await knex('restaurantes').where({ id }).first();
        if (!restaurante) {
            return res.status(404).json({ mensagem: 'Restaurante não encontrado com esse ID.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioAtualizarRestaurante
}