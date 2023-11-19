const { Router } = require('express');
const rota = Router();

const { intermediarioDetalharRestaurante } = require('../../intermediaros/restaurantes/intermediario_detalahar_restaurante');
const { detalharRestaurante } = require('../../controladores/restaurante/detalharRestaurante');

rota.get('/restaurante/:id', intermediarioDetalharRestaurante, detalharRestaurante);

module.exports = rota;