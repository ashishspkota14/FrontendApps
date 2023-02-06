const mongoose = require('mongoose')

const product_schema = new mongoose.Schema({
  product_name: String,
  price: Number,
})

module.exports = mongoose.model('Product', product_schema)
