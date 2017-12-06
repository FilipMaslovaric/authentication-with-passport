const mongoose = require('./database')

const Product = mongoose.model('Product', {
    brandName: String,
    name: String
})

module.exports = Product