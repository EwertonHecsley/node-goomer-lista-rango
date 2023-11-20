const rota = require('express').Router();

const { trocarPromocaoProduto } = require('../../controladores/promocao/trocarPromocao');
const { intermediarioTrocarPromocao } = require('../../intermediaros/promocao/intermediario_trocar_promocao');

rota.patch('/promocao/trocar_promocao/:id', intermediarioTrocarPromocao, trocarPromocaoProduto);

module.exports = rota;