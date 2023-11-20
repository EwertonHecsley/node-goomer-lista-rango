const rota = require('express').Router();

const { deletarPromocao } = require('../../controladores/promocao/deletarPromocao');
const { intermediarioDeletarPromocao } = require('../../intermediaros/promocao/intermediario_deletar_promocao');

rota.delete('/promocao/:id', intermediarioDeletarPromocao, deletarPromocao);

module.exports = rota;