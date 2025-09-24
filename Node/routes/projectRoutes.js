// Cargar Express
const express = require('express');
const router = express.Router();

// Cargar Controlador
const ProjectController = require('../controllers/projectController');

// Definir Rutas
router.post('/save', ProjectController.save);

// Exportar Rutas
module.exports = router;