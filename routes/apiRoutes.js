const router = require("express").Router();
const booksController = require("../controllers/booksController");


router.route("/saved")
    .get(booksController.findAll)
    .post(booksController.save);

router.route("/:id")
    .get(booksController.findById)
    .delete(booksController.delete);

module.exports = router;