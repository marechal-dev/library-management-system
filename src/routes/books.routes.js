const { Router } = require('express')
const { v4 } = require('uuid')

const booksRoutes = Router()

const books = []

function verifyIfBookExists(req, res, next) {
  const { id } = req.params

  const book = books.find((book) => book.id === id)

  if(!book) {
    return res.status(404).json({ error: "Book doesn't exists!" })
  }

  return next()
}

booksRoutes.get('/', (req, res) => {
 // Done
})

booksRoutes.post('/', (req, res) => {
  // Done
})

booksRoutes.put('/:id', verifyIfBookExists, (req, res) => {
  const { id } = req.params
  const { title, publisher, cover, authors } = req.body

  const book = books.find(book => book.id === id)

  book.title = title
  book.publisher = publisher
  book.cover = cover
  book.authors = authors

  return res.status(200).json(book)
})

booksRoutes.delete('/:id', verifyIfBookExists, (req, res) => {
  const { id } = req.params

  const book = books.indexOf(book => book.id === id)

  books.splice(book, 1)

  return res.status(200).json(books)
})

module.exports = booksRoutes
