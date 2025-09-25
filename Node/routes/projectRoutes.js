// Cargar Express
const express = require('express');
const router = express.Router();

// Cargar Controlador
const ProjectController = require('../controllers/projectController');

// Definir Rutas
router.post('/save', ProjectController.save);
router.get('/list', ProjectController.list);
router.get('/item/:id', ProjectController.item);
router.delete('/delete/:id', ProjectController.deleteProject);

// Exportar Rutas
module.exports = router;