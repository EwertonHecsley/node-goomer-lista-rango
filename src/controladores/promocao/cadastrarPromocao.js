const knex = require('../../configuracoes/conexao_database');

const cadastrarPromocaoProduto = async (req, res) => {
    const { descricao, preco_promocional, produto_id, dia_semana, horario_inicio, horario_fim } = req.body;
    try {
        const promocao = await knex('promocoes')
            .insert({ descricao, preco_promocional, produto_id, dia_semana, horario_inicio, horario_fim })
            .returning('*');

        await knex('produtos').update({ promocao: promocao[0].id }).where({ id: produto_id });

        return res.status(201).json({ mensagem: 'Promoção cadastrada com sucesso.', promocao: promocao[0] })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    cadastrarPromocaoProduto
}