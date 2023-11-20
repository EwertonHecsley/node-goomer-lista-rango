const express = require('express');
const app = express();

app.use(express.json());

const rota_listar_restaurantes = require('./rotas/restaurantes/rota_listarRestaurantes');
const rota_cadastrar_restaurante = require('./rotas/restaurantes/rota_cadastrarRestaurante');
const rota_deletar_restaurante = require('./rotas/restaurantes/rota_deletarRestaurante');
const rota_detalhar_restaurante = require('./rotas/restaurantes/rota_detalharRestaurante');
const rota_atualizar_restaurante = require('./rotas/restaurantes/rota_atualizarRestaurante');

const rota_cadastrar_categoria_produto = require('./rotas/categoria/rota_cadastrarCategoria');
const rota_listar_categoria_produto = require('./rotas/categoria/rota_listarCategorias');
const rota_deletar_categoria_produto = require('./rotas/categoria/rota_deletarCategoria');
const rota_atualizar_categoria_produto = require('./rotas/categoria/rota_atualizarCategoria');

const rota_cadastrar_produto = require('./rotas/produtos/rota_criarProduto');
const rota_listar_produtos = require('./rotas/produtos/rota_listarProduto');
const rota_atualizar_produto = require('./rotas/produtos/rota_atualizarProduto');
const rota_detalhar_produto = require('./rotas/produtos/rota_detalharProduto');
const rota_deletar_produto = require('./rotas/produtos/rota_deletarProduto');

app.use('/', rota_cadastrar_restaurante);
app.use('/', rota_detalhar_restaurante);
app.use('/', rota_atualizar_restaurante);
app.use('/', rota_deletar_restaurante);
app.use('/', rota_listar_restaurantes);

app.use('/', rota_cadastrar_categoria_produto);
app.use('/', rota_atualizar_categoria_produto);
app.use('/', rota_deletar_categoria_produto);
app.use('/', rota_listar_categoria_produto);

app.use('/', rota_cadastrar_produto);
app.use('/', rota_atualizar_produto);
app.use('/', rota_detalhar_produto);
app.use('/', rota_deletar_produto);
app.use('/', rota_listar_produtos);

module.exports = app;