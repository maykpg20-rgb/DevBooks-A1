const prisma = require("../prisma");

async function createAuthor(req, res) {
  try {
    const { name, biography } = req.body;

    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "O campo name é obrigatório." });
    }

    const author = await prisma.authors.create({
      data: {
        name,
        biography: biography ?? null
      }
    });

    return res.status(201).json(author);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Já existe um autor com esse nome." });
    }

    console.error(error);
    return res.status(500).json({ error: "Erro interno ao criar autor." });
  }
}

module.exports = {
  createAuthor
};
