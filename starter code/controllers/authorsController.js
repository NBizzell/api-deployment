
const createError = require('http-errors');
const { ObjectId } = require('mongodb');
const { Author } = require('../models/author')

exports.index = function (req, res) {
      res.send({})
}
