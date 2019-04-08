const router = require("express").Router();
const bookRoutes = require("./books");

// hits "/db/books/" then goes into books.js
router.use("/books", bookRoutes);

module.exports = router;