const rota = require('express').Router();

const { cadastrarPromocaoProduto } = require('../../controladores/promocao/cadastrarPromocao');
const { intermediaroCadastrarPromocao } = require('../../intermediaros/promocao/intermediario_cadastrar_promocao');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const schemaCadPromocao = require('../../schemas/promocao/schema_cadastrarPromocao');

rota.post('/promocao', validarBody(schemaCadPromocao), intermediaroCadastrarPromocao, cadastrarPromocaoProduto);

module.exports = rota;