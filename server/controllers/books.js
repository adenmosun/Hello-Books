const Book = require('../models/books').Book;

module.exports = {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
      })
      .then(Book => res.status(201).send(Book))
      .catch(error => res.status(400).send(error));
  },
};

module.exports = create;
