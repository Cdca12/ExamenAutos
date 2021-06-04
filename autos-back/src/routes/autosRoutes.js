const express = require('express');

const routes = express.Router();

const { obtenerAutos } = require('../controllers/autosController');


routes.get('/', obtenerAutos);


module.exports = routes;