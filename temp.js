const { Author } = require('./models/author');
const { Quote } = require('./models/quote');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotes')

async function createAuthor() {
  const author = new Author({ name: "bob" });
  await author.save()
  const quote = new Quote({content: "some thing inspirational4", tags: ["quote", "wellbeing"], owner: author})
  await quote.save()
  console.log("saved")
}

createAuthor()

