const express = require ('express')
const app = express()

const productRoute = require('./api/routes/product')
app.use('/products', productRoute);

module.exports = app;