var express = require('express');
var router = express.Router();

const quotes = require ('./controllers/quotesController')
const authors = require ('./controllers/authorsController')

/* GET home page. */

router.get('/authors', authors.index)
router.get('/quotes', quotes.index)
router.get('/random', quotes.random)

module.exports = router;
