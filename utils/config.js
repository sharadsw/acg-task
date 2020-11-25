require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.MONGODB_URI === 'test') {
  MONGODB_URI = process.env.MONGODB_URI_TEST
}

module.exports = {
  MONGODB_URI,
  PORT
}