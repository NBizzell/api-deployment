const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
  quotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quote"
  }]
})

module.exports.Author = mongoose.model('Author', authorSchema)

