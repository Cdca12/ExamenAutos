const express = require('express');

const routes = express.Router();

const { obtenerAutos, agregarAuto } = require('../controllers/autosController');

routes.get('/autos', obtenerAutos);
routes.post('/autos', agregarAuto);

module.exports = routes;