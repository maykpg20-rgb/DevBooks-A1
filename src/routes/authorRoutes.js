const express = require("express");
const { createAuthor } = require("../controllers/authorController");

const router = express.Router();

router.post("/authors", createAuthor);

module.exports = router;
