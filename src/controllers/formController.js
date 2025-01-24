const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função para criar uma nova submissão no banco de dados
const submitForm = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const submission = await prisma.formSubmission.create({
      data: { name, email, phone },
    });
    res.status(201).json({ message: "Formulário enviado com sucesso!", submission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao enviar o formulário." });
  }
};

module.exports = { submitForm };
