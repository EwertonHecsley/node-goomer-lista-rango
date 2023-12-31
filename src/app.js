const express = require('express');
const app = express();

app.use(express.json());

const home = require('./rotas/home/homePage');
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

const rota_cadastrar_promocao = require('./rotas/promocao/rota_cadastrarPromocao');
const rota_listar_promocao = require('./rotas/promocao/rota_listarPromocao');
const rota_remover_promocao_produto = require('./rotas/promocao/rota_removerPromocaoProduto');
const rota_trocar_promocao_produto = require('./rotas/promocao/rota_trocarPromocao');
const rota_atualizar_promocao_produto = require('./rotas/promocao/rota_atualizarPromocao');
const rota_deletar_promocao_produto = require('./rotas/promocao/rota_deletarPromocao');

app.use('/', home);

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

app.use('/', rota_cadastrar_promocao);
app.use('/', rota_atualizar_promocao_produto);
app.use('/', rota_remover_promocao_produto);
app.use('/', rota_trocar_promocao_produto);
app.use('/', rota_deletar_promocao_produto);
app.use('/', rota_listar_promocao);

module.exports = app;