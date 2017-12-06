if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const bodyParser = require('body-parser')
const { initialize } = require('./middleware/auth')
const morgan = require('morgan');

const app = express()

// Plugins
app.use(bodyParser.json()) // Allows me to have JSON uploads (POST/PUT)
app.use(initialize) // Use Passport to handle authentication
app.use(morgan('dev')); // Log server requests

// Routes

app.use([
    require('./routes/products'),
    require('./routes/auth')
])

// JSON error handling
app.use((error, req, res, next) => {
    res.send({error: error.message})
})

app.use((req,res,next) => {
    // No other routes left, must be a 404!
    res.status(404).send({
        error: `No route found for ${req.method}, ${req.url}`
    })
})

app.listen(7000, (error) => {
    if (error) {
        console.log('There was a problem starting the server', error)
    } else {
    console.log('Server is listening on http://localhost:7000/')
    }
})