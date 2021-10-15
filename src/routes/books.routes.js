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
  return res.status(200).json(books)
})

booksRoutes.post('/', (req, res) => {
  const { title, publisher, cover, authors } = req.body

  const bookAlreadyExists = books.some((book) => book.title === title)

  if(bookAlreadyExists) {
    return res.status(400).json({ error: "Book already exists!" })
  }

  const newBook = {
    id: v4(),
    title,
    publisher,
    cover,
    authors,
    created_at: new Date()
  }

  books.push(newBook)

  return res.status(201).json(newBook)
})

booksRoutes.put('/:id', verifyIfBookExists, (req, res) => {
  const { id } = req.params
  const { title, publisher, cover, authors } = req.body

  const book = books.find(book => book.id === id)

  book.title = title
  book.publisher = publisher
  book.cover = cover
  book.authors = authors
  book.updated_at = new Date()

  return res.status(200).json(book)
})

booksRoutes.delete('/:id', verifyIfBookExists, (req, res) => {
  const { id } = req.params

  const book = books.indexOf(book => book.id === id)

  books.splice(book, 1)

  return res.status(200).json(books)
})

module.exports = booksRoutes
