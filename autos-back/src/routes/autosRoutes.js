const express = require('express');

const routes = express.Router();

const { obtenerAutos, añadirAuto } = require('../controllers/autosController');

routes.get('/autos', obtenerAutos);
routes.post('/autos', añadirAuto);

module.exports = routes;