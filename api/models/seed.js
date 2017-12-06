const Product = require('./Product')

Product.create([
    {
        brandName: 'Apple',
        name: 'Watch'
    },
    {
        brandName: 'Apple',
        name: 'iPhone'
    },
    {
        brandName: 'Apple',
        name: 'iPad'
    },
    {
        brandName: 'Apple',
        name: 'MacBook'
    }
])
.then((products) => {
    console.log('Created!', products)
})
.catch((error) => {
    console.log('Unable to seed products!', error)
})