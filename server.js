require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const formRoutes = require("./src/routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas
app.use("/api", formRoutes);

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
