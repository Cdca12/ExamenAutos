const connection = require("../config/connection");

obtenerAutos = (req, res) => {
  if (connection) {
    let sql = "SELECT * FROM Autos";
    connection.query(sql, (err, autos) => {
      if (err) {
        res.json(err);
      } else {
        console.log(autos);
        res.json(autos);
      }
    });
  }
};

agregarAuto = (req, res) => {
  if (connection) {
    const auto = req.body;

    // Validaciones. TODO: Añadir las solicitadas por el cliente
    if (auto.Anio && auto.Anio.length !== 4) {
      return res.status(400).send({
        error: true,
        mensaje: "La fecha debe de ser de 4 carácteres",
      });
    }

    // Validar campos vacíos
    if (!auto.Modelo) {
      return res.status(400).send({
        error: true,
        mensaje: "El modelo no debe estar vacío",
      });
    }
    if (!auto.Marca) {
      return res.status(400).send({
        error: true,
        mensaje: "La marca no debe estar vacía",
      });
    }

    let sql = "INSERT INTO Autos set ?";

    connection.query(sql, [auto], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).send({
          error: true,
          mensaje:
            "Error al añadir auto a la base de datos, comuníquese con el Departamento de Sistemas",
        });
      } else {
        res.json({ error: false, data, mensaje: "Auto añadido con éxito" });
      }
    });
  }
};

module.exports = {
  obtenerAutos,
  agregarAuto,
};
