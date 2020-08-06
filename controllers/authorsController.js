
const createError = require('http-errors');
const { ObjectId } = require('mongodb');
const { Author } = require('../models/author')
const { Quote } = require('../models/quote')

exports.index = async function (req, res) {
  const authors = await Author.find()
  res.send({ 
    count: authors.length,
    totalCount: authors.length,
    lastItemIndex: null,
    results: await Promise.all(authors.map(async (author) => ({
      _id: author._id,
      name: author.name,
      quoteCount: (await Quote.count({owner: author._id}))
  })))
  })
}
