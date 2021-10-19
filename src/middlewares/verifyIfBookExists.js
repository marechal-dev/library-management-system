const Book = require('../schemas/BookSchema')

exports.verifyIfBookExists = async function (req, res, next) {
  const { id } = req.params

  const book = await Book.findById(id)

  if(!book) {
    return res.status(404).json({ error: "Book doesn't exists!" })
  }

  return next()
}