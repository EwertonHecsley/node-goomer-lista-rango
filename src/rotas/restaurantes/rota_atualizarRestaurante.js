const { Router } = require('express');
const rota = Router();

const { intermediarioAtualizarRestaurante } = require('../../intermediaros/restaurantes/intermediario_atualizar_restaurante');
const { validarBody } = require('../../intermediaros/validar_body_requisicao');
const schemaCadRest = require('../../schemas/restaurantes/schema_cadastrarRestaurante');
const multer = require('../../configuracoes/multer.js');
const { atualizarRestaurante } = require('../../controladores/restaurante/atualizarRestaurante.js');

rota.put('/restaurante/:id', multer.single('foto'), validarBody(schemaCadRest), intermediarioAtualizarRestaurante, atualizarRestaurante);

module.exports = rota;