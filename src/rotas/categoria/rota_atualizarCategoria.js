const { Router } = require('express');
const rota = Router();

const schemaCadCatProd = require('../../schemas/categorias/schema_cadastrarCategoriasProduto');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const { intermediaroAtualizarCategoriaProduto } = require('../../intermediaros/categoria/intermediario_atualizar_categoria');
const { atualizarCategoriaProduto } = require('../../controladores/categoria/atualizarCategoria');

rota.put('/categoria/:id', validarBody(schemaCadCatProd), intermediaroAtualizarCategoriaProduto, atualizarCategoriaProduto);

module.exports = rota;
