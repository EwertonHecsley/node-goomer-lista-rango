const rota = require('express').Router();

const { intermediarioAtualizarPromocaoProduto } = require('../../intermediaros/promocao/intermediario_atualizar_promocao_produto');
const schemaCadPromocao = require('../../schemas/promocao/schema_cadastrarPromocao');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const { atualizarPromocaoProduto } = require('../../controladores/promocao/atualizarPromocao');

rota.put('/promocao/:id', validarBody(schemaCadPromocao), intermediarioAtualizarPromocaoProduto, atualizarPromocaoProduto);

module.exports = rota;