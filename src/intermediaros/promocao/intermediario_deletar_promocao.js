const knex = require('../../configuracoes/conexao_database');

const intermediarioDeletarPromocao = async (req, res, next) => {
    const { id } = req.params;
    try {
        const promocao = await knex('promocoes')
            .where({ id })
            .first();
        if (!promocao) {
            return res.status(404).json({ mensagem: 'Promoção não encontrada com esse ID.' })
        }
        const produto = await knex('produtos');
        if (produto.some((prd) => prd.promocao == id)) {
            return res.status(400).json({ mensagem: 'Promocao vinculada há um produto.' })
        }

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioDeletarPromocao
}