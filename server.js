require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // <-- AQUI
const formRoutes = require("./src/routes/formRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir CORS para o domínio do frontend
app.use(cors({
  origin: "https://blossomboost.com.br", // ou "*" para todos, com cuidado
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas
app.use("/api", formRoutes);

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

