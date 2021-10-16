const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  cover: String,
  author: [String],
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', BookSchema)
