
const createError = require('http-errors');
const { ObjectId } = require('mongodb');
const { Quote } = require('../models/quote')

exports.index = async function (req, res) {
      const quotes = await Quote.find().populate("owner")
      res.send({
            count: quotes.length,
            totalCount: quotes.length,
            lastItemIndex: null,
            results: quotes.map((quote) => ({
                  _id: quote._id,
                  content: quote.content,
                  author: quote.owner.name,
                  length: quote.content.length,
                  tags: quote.tags
            })) 
      })
}

exports.random = async function (req, res) {
      const length = await Quote.count()
      const quote = await Quote.findOne().limit(1).skip(Math.floor(Math.random()*length)).populate("owner")
      res.send({
                  _id: quote._id,
                  content: quote.content,
                  author: quote.owner.name,
                  length: quote.content.length,
                  tags: quote.tags
            })

}