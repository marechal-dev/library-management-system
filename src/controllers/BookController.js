const { getBooks, postBook, putBook, deleteBook } = require('../services/BookServices')

exports.getBooks = async function(req, res) {
  try {
    const books = await getBooks()

    return res.status(200).json(books)
  } catch (error) {
    return res.status(401).json({ error: error })
  }
}

exports.postBook = async function(req, res) {
  const { title, publisher, cover, authors } = req.body

  try {
    const newBook = await postBook(title, publisher, cover, authors)

    return res.status(200).json(newBook)
  } catch (error) {
    return res.status(401).json({ error: error })
  }
}

exports.putBook = async function(req, res) {
  const { id } = req.params
  const { title, publisher, cover, authors } = req.body

  try {
    const bookToUpdate = await putBook(id, title, publisher, cover, authors)

    return res.status(200).json(bookToUpdate)
  } catch (error) {
    return res.status(401).json({ error: error })
  }
}

exports.deleteBook = async function(req, res) {
  const { id } = req.params

  try {
    const bookToDelete = await deleteBook(id)

    return res.status(200).json(bookToDelete)
  } catch (error) {
    return res.status(401).json({ error: error })
  }
}
