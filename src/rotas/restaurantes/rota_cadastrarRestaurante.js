const { Router } = require('express');
const rota = Router();

const schemaCadRest = require('../../schemas/restaurantes/schema_cadastrarRestaurante');
const { novoRestaurante } = require('../../controladores/restaurante/cadastrarRestaurante');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const { intermediarioValidacoes } = require('../../intermediaros/restaurantes/intermediario_cadastrar_restaurante.js');
const multer = require('../../configuracoes/multer.js');

rota.post('/restaurante', multer.single('foto'), validarBody(schemaCadRest), intermediarioValidacoes, novoRestaurante);

module.exports = rota;