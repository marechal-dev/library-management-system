const { Router } = require('express')

const BookController = require('../controllers/BookController')

const { verifyIfBookExists } = require('../middlewares/verifyIfBookExists')

const booksRoutes = Router()

booksRoutes.get('/', BookController.getBooks)

booksRoutes.post('/', BookController.postBook)

booksRoutes.put('/:id', verifyIfBookExists, BookController.putBook)

booksRoutes.delete('/:id', verifyIfBookExists, BookController.deleteBook)

module.exports = booksRoutes
