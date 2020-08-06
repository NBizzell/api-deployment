const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
})

module.exports.Author = mongoose.model('Author', authorSchema)

