const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  content: String,
  tags: Array,
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
})

module.exports.Quote = mongoose.model('Quote', quoteSchema)

