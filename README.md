# DevBooks API — Atividade Prática Avaliativa (A1)

Projeto desenvolvido conforme os requisitos da atividade de **Programação para WEB II**.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- SQLite
- Postman

## Estrutura

```text
devbooks/
├── prisma/
│   ├── migrations/
│   │   └── 20260927200000_init/
│   │       └── migration.sql
│   └── schema.prisma
├── src/
│   ├── controllers/
│   │   ├── authorController.js
│   │   └── bookController.js
│   ├── routes/
│   │   ├── authorRoutes.js
│   │   └── bookRoutes.js
│   └── prisma.js
├── collection.json
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Instalação

No terminal, dentro da pasta do projeto:

```bash
npm install
npx prisma generate
npx prisma migrate dev
```

Depois:

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Rotas exigidas

| Método | Rota | Função |
|---|---|---|
| POST | `/authors` | Criar autor |
| POST | `/books` | Criar livro associado a autor |
| GET | `/books` | Listar livros com autor |
| PUT | `/books/:id` | Atualizar livro |
| DELETE | `/books/:id` | Excluir livro |

## Testes com Postman

Importe o arquivo `collection.json` no Postman.

1. Execute **1 - Criar Autor**.
2. Copie o `id` retornado e coloque na variável `authorId`.
3. Execute **2 - Criar Livro**.
4. Copie o `id` retornado e coloque na variável `bookId`.
5. Execute as requisições de listagem, atualização e exclusão.

## GitHub

Antes de enviar:

```bash
git init
git add .
git commit -m "Implementa API DevBooks com Express e Prisma"
git branch -M main
git remote add origin SEU_REPOSITORIO
git push -u origin main
```

A pasta `node_modules` não deve ser enviada, pois já está incluída no `.gitignore`.
O banco local `dev.db` também não é enviado; ele é recriado pelas migrations do Prisma.
