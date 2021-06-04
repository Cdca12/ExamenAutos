const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "Admin$123",
    "database": "Autos"
}

// Se crea la conexión
const myConn = mysql.createConnection(objectConnection);

// Conectamos con la bd
myConn.connect((error) => {
    if(error){
        console.log("Error en base de datos: ", error);
    } else {
        console.log("Base de datos conectada");
    }
});

module.exports = myConn;