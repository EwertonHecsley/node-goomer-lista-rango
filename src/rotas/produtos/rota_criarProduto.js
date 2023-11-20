const { Router } = require('express');
const rota = Router();

const schemaCadProduto = require('../../schemas/produtos/schema_cadastrarProduto');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const { cadastrarProduto } = require('../../controladores/produto/cadastrarProduto');
const { intermediarioCadastrarProduto } = require('../../intermediaros/produto/intermediario_cadastrar_produto');
const multer = require('../../configuracoes/multer');

rota.post('/produto', multer.single('foto'), validarBody(schemaCadProduto), intermediarioCadastrarProduto, cadastrarProduto);

module.exports = rota;