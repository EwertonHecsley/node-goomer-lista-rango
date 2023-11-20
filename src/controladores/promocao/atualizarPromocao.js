const knex = require('../../configuracoes/conexao_database');

const atualizarPromocaoProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao, preco_promocional, produto_id, dia_semana, horario_inicio, horario_fim } = req.body;
    try {
        await knex('promocoes').update({ descricao, preco_promocional, produto_id, dia_semana, horario_inicio, horario_fim }).where({ id })
        return res.status(200).json({ mensagem: 'Promoção atualizada.' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    atualizarPromocaoProduto
}