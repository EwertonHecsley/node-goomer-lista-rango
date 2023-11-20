const rota = require('express').Router();

const { deletarProduto } = require('../../controladores/produto/deletarProduto');
const { intermediarioDeletarProduto } = require('../../intermediaros/produto/intermediario_deletar_produto');

rota.delete('/produto/:id', intermediarioDeletarProduto, deletarProduto);

module.exports = rota;