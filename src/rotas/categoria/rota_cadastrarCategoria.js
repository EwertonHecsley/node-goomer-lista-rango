const { Router } = require('express');
const rota = Router();

const schemaCadCatProd = require('../../schemas/categorias/schema_cadastrarCategoriasProduto');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const { cadastrarCategoriaProduto } = require('../../controladores/categoria/cadastrarCategoria');

rota.post('/categoria', validarBody(schemaCadCatProd), cadastrarCategoriaProduto);

module.exports = rota;