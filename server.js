const express = require("express");
const authorRoutes = require("./src/routes/authorRoutes");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DevBooks API funcionando!",
    endpoints: [
      "POST /authors",
      "POST /books",
      "GET /books",
      "PUT /books/:id",
      "DELETE /books/:id"
    ]
  });
});

app.use(authorRoutes);
app.use(bookRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`Servidor DevBooks rodando em http://localhost:${PORT}`);
});
