const { Router } = require('express');
const rota = Router();
const { listarTodosRestaurantes } = require('../../controladores/restaurante/listarTodosRestaurantes');

rota.get('/restaurante', listarTodosRestaurantes);

module.exports = rota;