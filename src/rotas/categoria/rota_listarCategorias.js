const { Router } = require('express');
const rota = Router();

const { listarCategoriasProduto } = require('../../controladores/categoria/listarCategorias');

rota.get('/categoria', listarCategoriasProduto);

module.exports = rota;