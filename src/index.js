const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "cosmetics",
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is listening in port: ${port}`);
});

// ENDPOINTS

app.get("/cosmetics", async (req, res) => {
  const connection = await getDBConnection();

  const querySQL = "SELECT * FROM products";
  const [result] = await connection.query(querySQL);

  connection.end();

  res.json({
    info: { count: result.length },
    results: result,
  });
});

app.get("/cosmetics/:id", async (req, res) => {
  const idCosmetic = req.params.id;

  const connection = await getDBConnection();
  const querySQL = "SELECT * FROM products WHERE id = ? ";
  const [result] = await connection.query(querySQL, [idCosmetic]);

  connection.end();

  if (result.length === 0) {
    res.status(404).json({
      success: false,
      error: "No hay ningún elemento con ese ID",
    });
  } else {
    res.status(200).json({
      success: true,
      result: result,
    });
  }
});

app.post("/cosmetics", async (req, res) => {
  const data = req.body;
  const { nombre, tipo, marca, descripcion } = data;

  const connection = await getDBConnection();
  const querySQL =
    "INSERT INTO products (nombre, tipo, marca, descripcion) VALUES (?, ?, ?, ?)";
  const [result] = await connection.query(querySQL, [
    nombre,
    tipo,
    marca,
    descripcion,
  ]);
  console.log(result);

  res.status(201).json({
    success: true,
    id: result.insertId,
  });
});

app.put("/cosmetics/:id", async (req, res) => {
  const idCosmetic = req.params.id;

  const newData = req.body;
  const { nombre, tipo, marca, descripcion } = newData;

  const connection = await getDBConnection();
  const query =
    "UPDATE products SET nombre = ?, tipo = ?, marca = ?, descripcion = ?  WHERE id =  ? ";
  const [result] = await connection.query(query, [
    nombre,
    tipo,
    marca,
    descripcion,
    idCosmetic,
  ]);

  res.status(200).json({
    success: true,
  });
});

app.delete("/cosmetics", async (req, res) => {
  const idCosmetic = req.params.id;

  const connection = await getDBConnection();
  const sqlQuery = "DELETE FROM products WHERE id = ?";
  const [result] = await connection.query(sqlQuery, [idCosmetic]);
  if (result.affectedRows > 0) {
    res.status(200).json({
      success: true,
      message: "Elemento eliminado",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No se ha eliminado el elemento",
    });
  }
});
