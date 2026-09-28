const prisma = require("../prisma");

async function createBook(req, res) {
  try {
    const { title, release_year, author_id } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "O campo title é obrigatório." });
    }

    if (!Number.isInteger(release_year)) {
      return res.status(400).json({ error: "O campo release_year deve ser um número inteiro." });
    }

    if (!author_id || typeof author_id !== "string") {
      return res.status(400).json({ error: "O campo author_id é obrigatório." });
    }

    const book = await prisma.books.create({
      data: {
        title,
        release_year,
        author: {
          connect: { id: author_id }
        }
      },
      include: {
        author: true
      }
    });

    return res.status(201).json(book);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Autor não encontrado." });
    }

    console.error(error);
    return res.status(500).json({ error: "Erro interno ao criar livro." });
  }
}

async function getBooks(req, res) {
  try {
    const books = await prisma.books.findMany({
      include: {
        author: true
      },
      orderBy: {
        title: "asc"
      }
    });

    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno ao listar livros." });
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const { title, release_year, author_id } = req.body;

    const data = {};

    if (title !== undefined) {
      if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({ error: "O campo title deve ser um texto não vazio." });
      }
      data.title = title;
    }

    if (release_year !== undefined) {
      if (!Number.isInteger(release_year)) {
        return res.status(400).json({ error: "O campo release_year deve ser um número inteiro." });
      }
      data.release_year = release_year;
    }

    if (author_id !== undefined) {
      if (typeof author_id !== "string" || !author_id) {
        return res.status(400).json({ error: "O campo author_id deve ser um ID válido." });
      }
      data.author = {
        connect: { id: author_id }
      };
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Informe pelo menos um campo para atualização." });
    }

    const book = await prisma.books.update({
      where: { id },
      data,
      include: {
        author: true
      }
    });

    return res.status(200).json(book);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Livro ou autor não encontrado." });
    }

    console.error(error);
    return res.status(500).json({ error: "Erro interno ao atualizar livro." });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;

    await prisma.books.delete({
      where: { id }
    });

    return res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Livro não encontrado." });
    }

    console.error(error);
    return res.status(500).json({ error: "Erro interno ao excluir livro." });
  }
}

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook
};
