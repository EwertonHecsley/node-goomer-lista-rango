const { Router } = require('express');
const rota = Router();

const { intermediarioDeletarCategoriaProduto } = require('../../intermediaros/categoria/intermediario_deletar_categoria');
const { deletarCategoriaProduto } = require('../../controladores/categoria/deletarCategoria');

rota.delete('/categoria/:id', intermediarioDeletarCategoriaProduto, deletarCategoriaProduto);

module.exports = rota;