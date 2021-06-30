const mongoose = require('mongoose')
const container = require('./src/startup/container')
const server = container.resolve('app')
const { MONGODB_CNN } = container.resolve('config')

mongoose.set('useCreateIndex', true)

mongoose
  .connect(MONGODB_CNN, { useNewUrlParser: true, useFindAndModify: true })
  .then(() => server.start())
  .catch(console.log)
