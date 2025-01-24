const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/formController");

// Rota para enviar o formulário
router.post("/submit", submitForm);

module.exports = router;
