const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/product_route')

const app = express()

app.use(express.json())

const port = 8080
const url = 'mongodb+srv://gorakh:6KMl99v8zCdOymJT@learningmongodb.i6ipqre.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, () => {
  console.log('Database connected!')
})

app.use('/api/products', routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
