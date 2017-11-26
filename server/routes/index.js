const express = require('express');
const bodyParser = require ('body-parser')
const app = express ();
const booksController = require('../controllers/books');



module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));

  app.post('/api/books', booksController.create);

  app.get('/api/books', booksController.list);


  app.put( '/api/books/:id', booksController.modify);

  app.post('/api/users/:userid/borrow/:bookid', booksController.borrow);

  // app.post('/api/users/:userid/return/:bookid', booksController.return);

  // app.put('/api/users/:userid/borrow/:bookid', booksController.borrow-request);

  // app.put('/api/users/:userid/return/:bookid', booksController.return-request);

  // app.post('/api/users/:userid/review/:bookid', booksController.review);

  // app.post('/api/users/:userid/fav/:bookid', booksController.favnum);

  // app.get('/api/users/:userid/favbooks', booksController.favbooks);

  // app.get('/api/books?sort=upvotes&order=desc', booksController.vote);


};