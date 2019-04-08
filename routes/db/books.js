const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// hits /db/books/
router.route("/")
    // send nothing, run on load
    .get(booksController.findAll)
    /*
    run on save Button click, will need:
    title, author, [synopsis],
    schema will create a date added
    */
    .post(booksController.save);

// hits /db/books/:id
router.route("/:id")
    // send id of book
    .get(booksController.findById)
    // send id of book
    .delete(booksController.delete);

module.exports = router;