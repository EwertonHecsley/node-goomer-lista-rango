const { Router } = require('express');
const rota = Router();

const { listarProdutos } = require('../../controladores/produto/listarProdutos');

rota.get('/produto', listarProdutos);

module.exports = rota;