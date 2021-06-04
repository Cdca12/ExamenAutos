const connection = require('../config/connection');

obtenerAutos = (req, res) => {
    if (connection) {
        let sql = "SELECT * FROM Autos";
        connection.query(sql, (err, autos) => {
            if (err) {
                res.json(err);
            } else {
                console.log(autos);
                res.json(autos)
            }
        });
    }
}

module.exports = {
    obtenerAutos
}