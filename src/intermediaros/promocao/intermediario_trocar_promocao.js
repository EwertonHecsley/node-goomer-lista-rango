const knex = require('../../configuracoes/conexao_database');

const intermediarioTrocarPromocao = async (req, res, next) => {
    const { id } = req.params;
    const { id_promocao } = req.body;
    try {
        const produto = await knex('produtos').where({ id }).first();
        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado para esse ID.' })
        }
        const promocao = await knex('promocoes').where({ id: id_promocao }).first();
        if (!promocao) {
            return res.status(404).json({ mensagem: 'Promoção não encontrada.' })
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    intermediarioTrocarPromocao
}