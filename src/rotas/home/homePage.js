const rota = require('express').Router();

const { home } = require('../../controladores/home/homePage');

rota.get('/', home);

module.exports = rota;