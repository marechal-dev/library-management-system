const Book = require('../schemas/BookSchema')

exports.getBooks = async function() {
  const books = await Book.find()
  .lean()
  .then(() => {
    return books
  })
  .catch((error) => {
    console.error(`Error: ${error}`)
    return error
  })
}

exports.createBook = async function(title, publisher, cover, authors) {
  const newBook = await Book.create({
    title,
    publisher,
    cover,
    authors
  }).then(() => {
    return newBook
  }).catch((error) => {
    console.error(`Error: ${error}`)
    return error
  })
}

exports.updateBook = async function(id, title, publisher, cover, authors) {
  const bookToUpdate = await Book.findOneAndUpdate({ _id: id }, {
    title,
    publisher,
    cover,
    authors
  }).then(() => {
    return bookToUpdate
  }).catch((error) => {
    console.error(`Error: ${error}`)
    return error
  })
}

exports.deleteBook = async function(id) {
  const bookToDelete = await Book.findOneAndDelete({ _id: id })
  .then(() => {
    return bookToDelete, true
  })
  .catch((error) => {
    console.error(`Error: ${error}`)
    return error
  })
}
