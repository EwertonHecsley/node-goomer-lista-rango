const rota = require('express').Router();

const { listarPromocoes } = require('../../controladores/promocao/listarPromocao');

rota.get('/promocao', listarPromocoes);

module.exports = rota;