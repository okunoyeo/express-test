const bookList = require('../data/books.json');

const books = {
  getAll: (req, res) => {
    if (bookList) {
      return res.status(200).send(bookList);
    } else {
      return res.sendStatus(404);
    }
  },

  getById: (req, res) => {
    const book = bookList.filter(a => a.Id == req.params.id);
    if (book && book.length) {
      return res.status(200).send(book);
    } else {
      return res.sendStatus(404);
    }
  }
};

module.exports = books;
