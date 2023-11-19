const { Router } = require('express');
const rota = Router();

const { intermediarioDeletarRestaurante } = require('../../intermediaros/restaurantes/intermediario_deletar_restaurante');
const { deletarRestaurante } = require('../../controladores/restaurante/deletarRestaurante');

rota.delete('/restaurante/:id', intermediarioDeletarRestaurante, deletarRestaurante);

module.exports = rota