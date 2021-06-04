const express = require('express');

// Inicializamos Express
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    console.log("Hola mundo");
    res.json({mensaje: "Mensaje de binvenida"})
})

// Levantar servidor
app.listen(app.get('port'), (error => {
    if(error){
        console.log(error);
    } else {
        console.log(`Servidor en puerto: ${app.get('port')}`)
    }
}))