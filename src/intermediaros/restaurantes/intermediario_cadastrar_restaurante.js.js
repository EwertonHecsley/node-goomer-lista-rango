const buscaCep = require('cep-promise');

const intermediarioValidacoes = async (req, res, next) => {
    const { cep } = req.body;

    try {
        const { state, city, neighborhood, street } = await buscaCep(cep);
        req.endereco = {
            cidade: city,
            logradouro: street,
            bairro: neighborhood,
            cep,
            estado: state
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioValidacoes
}