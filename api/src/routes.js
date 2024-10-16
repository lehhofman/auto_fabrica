const express = require('express');
const alocacao = require('./controllers/alocacao');
const automovel = require('./controllers/automovel');
const cliente = require('./controllers/cliente');
const concessionaria = require('./controllers/concessionaria');
const vendas = require('./controllers/venda');

const router = express.Router();

// Rotas para alocacao
router.get('/alocacao', alocacao.readAll);
router.get('/alocacao/area', alocacao.readArea);
router.post('/alocacao', alocacao.create);
router.put('/alocacao/:id', alocacao.update);

// Rotas para automoveis
router.get('/automovel', automovel.read);
router.get('/automovel/:area', automovel.readArea);
router.post('/automovel', automovel.create);
router.put('/automovel/:id', automovel.update);

// Rotas para clientes
router.get('/cliente', cliente.read);
router.post('/cliente', cliente.create);
router.put('/cliente/:id', cliente.update);

// Rotas para concessionarias
router.get('/concessionarias', concessionaria.read);
router.get('/concessionarias/:automovelId', concessionaria.read);
router.put('/concessionarias/:id', concessionaria.update);

// Rotas para vendas
router.get('/vendas', vendas.read);
router.post('/vendas', vendas.create);

module.exports = router;
