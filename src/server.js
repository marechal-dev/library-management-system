require('dotenv').config()
const PORT = process.env.PORT || 3333

const express = require('express')

const booksRoutes = require('./routes/books.routes')

const server = express()

server.use(express.json())

server.use('/obras',booksRoutes)

server.listen(PORT, () => {
  console.log("Running at http://localhost:3333")
})
