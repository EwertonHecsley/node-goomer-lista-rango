const knex = require('../../configuracoes/conexao_database');

const removerPromocaoProduto = async (req, res) => {
    const { id } = req.params;
    try {
        await knex('produtos').update({ promocao: false }).where({ id });
        return res.status(200).json({ mensagem: 'Promocao removida do produto' })
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.', resposta: error.message })
    }
};

module.exports = {
    removerPromocaoProduto
}