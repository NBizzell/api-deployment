
const createError = require('http-errors');
const { ObjectId } = require('mongodb');
const { Quote } = require('../models/quote')

exports.index = function (req, res) {
      res.send({})
}
