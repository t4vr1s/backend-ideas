if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  PORT: process.env.PORT,
  MONGODB_CNN: process.env.MONGODB_CNN,
  APPLICATION_NAME: process.env.APPLICATION_NAME
}
