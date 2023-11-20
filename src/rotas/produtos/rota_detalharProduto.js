const rota = require('express').Router();

const { detalharProduto } = require('../../controladores/produto/detalharProduto');
const { intermediarioDetalharProduto } = require('../../intermediaros/produto/intermediario_detalhar_produto');

rota.get('/produto/:id', intermediarioDetalharProduto, detalharProduto);

module.exports = rota;