const db = require("../models");

module.exports = {
    // run on page load, get all saved books
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ author: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    /*
    run on search, will need:
        _id in req.params.id
    */
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    /*
    run on save Button click, will need:
        title, author, [synopsis],
        schema will create a date added
    */
    save: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
    /*
    run on delete Button click, will need:
        _id on req.params.id
    */
    delete: function(req, res) {
        db.Book
        .findOneAndDelete({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};