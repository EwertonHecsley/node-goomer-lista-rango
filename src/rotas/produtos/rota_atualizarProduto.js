const rota = require('express').Router();

const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const schemaCadProduto = require('../../schemas/produtos/schema_cadastrarProduto');
const multer = require('../../configuracoes/multer');
const { intermediaroAtualizarProduto } = require('../../intermediaros/produto/intermediario_atualizar_produto');
const { atualizarProduto } = require('../../controladores/produto/atualizarProduto');


rota.put('/produto/:id', multer.single('foto'), validarBody(schemaCadProduto), intermediaroAtualizarProduto, atualizarProduto);

module.exports = rota;