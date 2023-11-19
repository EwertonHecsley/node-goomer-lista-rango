const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_restaurantes = require('./rotas/restaurantes/rota_listarRestaurantes');
const rota_cadastrar_restaurante = require('./rotas/restaurantes/rota_cadastrarRestaurante');

app.use('/', rota_listar_restaurantes);
app.use('/', rota_cadastrar_restaurante);

module.exports = app;