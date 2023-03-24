const express = require('express');
const router = express.Router();

const carroController = require('./controllers/carroControler');

router.get('/carros', carroController.buscarTodos)
router.get('/carro/:codigo', carroController.buscar)

module.exports = router;