const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');
const verificarToken = require('../middleware/auth');

// Rotas públicas (Auth)
router.post('/cadastro', menuController.register);
router.post('/login', menuController.login);

// Rotas protegidas (Requer Token)
router.get('/sorte', verificarToken, menuController.getSorte);

module.exports = router;