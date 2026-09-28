# Checklist da entrega

- [x] SQLite configurado como banco do Prisma.
- [x] `Authors` com `id`, `name` único e `biography` opcional.
- [x] `Books` com `id`, `title`, `release_year` e `author_id`.
- [x] Relacionamento 1:N entre Authors e Books.
- [x] Migration em `prisma/migrations`.
- [x] POST `/authors`.
- [x] POST `/books` com relação obrigatória ao autor.
- [x] GET `/books` usando `include: { author: true }`.
- [x] PUT `/books/:id`.
- [x] DELETE `/books/:id`.
- [x] Collection do Postman com as 5 rotas.
- [x] `.gitignore` sem `node_modules`.
- [x] README com instalação e envio ao GitHub.

## Observação

A atividade pede o envio do link de um repositório público no GitHub. Depois de criar o repositório, faça o push dos arquivos e envie o link no AVA.
