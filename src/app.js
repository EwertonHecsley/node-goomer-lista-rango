const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_restaurantes = require('./rotas/restaurantes/listarRestaurantes');

app.use('/', rota_listar_restaurantes);

module.exports = app;