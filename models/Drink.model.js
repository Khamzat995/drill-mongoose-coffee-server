const mongoose = require('mongoose')

const drinkScheme = mongoose.Schema({
  name: String,
  price: Number,
  isInStock: Boolean,
  hasCaffeine: Boolean,
  volume: String,
  description: String,
});

const Drink = mongoose.model('Drink', drinkScheme)

module.exports = Drink