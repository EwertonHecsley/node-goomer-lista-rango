const rota = require('express').Router();

const { removerPromocaoProduto } = require('../../controladores/promocao/removerPromocaoProduto');
const { intermediarioRemoverPromocaoDoProduto } = require('../../intermediaros/promocao/intermediario_remover_promocao_produto');

rota.patch('/promocao/remover/:id', intermediarioRemoverPromocaoDoProduto, removerPromocaoProduto);

module.exports = rota;