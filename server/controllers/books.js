const books = require('../models/books.json').books;

let id = 4;
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
    return books
     .create({
       title: req.body.title,
       author: req.body.author,
       category:req.body.category,
       year:req.body.year
     })
      
     .then(books => res.status(200).send(books))
     .catch(error => res.status(400).send(error));
    bookData[id] = {
      id: id,
      title: req.body.title,
    };
    res.status(200).send(bookData[id]);
    id++;
}
  },
  

  list(req, res) {
    return (books)
      // .then(result => res.status(200).send(result))
      // .catch(error => res.send(error.message));
  }
};