const { getBooks, createBook, updateBook, deleteBook } = require('../data/booksData')

exports.getBooks = async function() {
  return await getBooks()
}

exports.postBook = async function(title, publisher, cover, authors) {
  return await createBook(title, publisher, cover, authors)
}

exports.putBook = async function(id, title, publisher, cover, authors) {
  return await updateBook(id, title, publisher, cover, authors)
}

exports.deleteBook = async function(id) {
  return await deleteBook(id)
}
