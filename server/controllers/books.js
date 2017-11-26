const books = require('../models/books');

let id = 0;
module.exports = {
create(req, res) {
    if(!req.body.title ){
        res.json({message:"title field is required"})
      }
      else if (!req.body.category ){
        res.json({message:"category field is required"})
      }else if (!req.body.author ){
        res.json({message:"author field is required"})
      }
      
      else
      {
    books[id] = {
      id: id,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      photo: req.body.photo,
      quantity: req.body.quantity,
    };
    res.status(200).send(books[id]);
    id++;
}
  },

modify(req, res) {
    res.json(books)
      .update(req.body,
        {
          where: {
            id: req.params.id
          }
        })
      .then(() => res.status(200).send({
        message: 'Book updated successfully!'
      }))
      .catch(error => res.status(400).send(error));
  },



  list(req, res) {
    res.send(books)
      .then(result => res.status(200).send(result))
      .catch(error => res.send(error.message));
  },

  borrow(req, res) {
    books.findOne({ where: { id: req.body.id } })
      .then(books => Book
        .update({
            quantity: books.quantity - 1
          }, {
            where: {
              id: req.body.id
            }
          }))
      .then(() => res.status(201).send({
        message: 'You have successfully rented the book',
      }))
      .catch(error => res.status(400).send(error));
  },
 }
