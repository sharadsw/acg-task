const config = require('./utils/config')
const personRouter = require('./controllers/persons')
const middleware = require('./utils/middleware')

const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

console.log('Connecting to MongoDB');
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('Connected');
  })
  .catch(error => {
    console.log('Error in connection', error.message);
  })

app.use(express.static('ui/build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/persons', personRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app