const express = require('express');

// Inicializamos Express
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Base de Datos
require('./config/connection');

// Rutas
app.use(require('./routes/autosRoutes'));

// Levantar servidor
app.listen(app.get('port'), (error => {
    if(error){
        console.log(error);
    } else {
        console.log(`Servidor en puerto: ${app.get('port')}`)
    }
}))