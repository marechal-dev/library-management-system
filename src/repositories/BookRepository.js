const { v4 } = require('uuid')

const Book = require('../schemas/BookSchema')

async function searchForBook(title) {
  const book = await Book.findOne({ title: title })

  if(book) {
    return book
  } else {
    return false
  }
}

module.exports = async function listBooks() {
  const books = await Book.find().lean()

  return books
}


module.exports = async function createBook(req, res) {
  const { title, publisher, cover, authors } = req.body

  const bookAlreadyExists = searchForBook()

  if(bookAlreadyExists) {
    return res.status(400).json({ error: "Book already exists!" })
  }

  const newBook = await Book.create({
    title,
    publisher,
    cover,
    authors,
  }).catch((error) => {
    console.error(`Error: ${error}`)
    return res.status(500).json({ error: "Internal server error!" })
  })

  return res.status(201).json(newBook)
}

module.exports = async function updateBook(req, res) {
  const { id } = req.params
  const { title, publisher, cover, authors } = req.body

  const book = searchForBook(id)

  if (!book) {
    return res.status(404).json({ error: "Book not found!" })
  }

  const updatedBook = await Book.updateOne({ _id: id }, { 
    title,
    publisher,
    cover,
    authors
  })

  return res.status(200).json(updatedBook)
}

module.exports = async function deleteBook(req, res) {
  const { id } = req.params
  
  const book = searchForBook(id)

  if (!book) {
    return res.status(404).json({ error: "Book not found!" })
  }

  await Book.deleteOne({ _id: id })

  return res.status(200).json("Deleted!")
}

