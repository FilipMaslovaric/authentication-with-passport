const Product = require('./Product')

Product.deleteMany()
    .then((products) => {
        console.log('Wiped products!')
    })
    .catch((error) => {
        console.log('Unable to delete products!', error)
    })