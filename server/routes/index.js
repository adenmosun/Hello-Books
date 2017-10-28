const express = require('express');
const bodyParser = require ('body-parser')
const app = express ();
const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/books', todosController.create);
};