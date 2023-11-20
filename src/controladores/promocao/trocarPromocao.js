const knex = require('../../configuracoes/conexao_database');

const trocarPromocaoProduto = async (req, res) => {
    const { id } = req.params;
    const { id_promocao } = req.body;
    try {
        await knex('produtos').update({ promocao: id_promocao }).where({ id });
        return res.status(200).json({ mensagem: 'Promoção atribuida/atualizada ao produto' })
    } catch (error) {
        return res.status(404).json({ mensagem: 'Promoção não encontrada.' })

    }
};

module.exports = {
    trocarPromocaoProduto
}