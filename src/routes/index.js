const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')

const { ErroMiddleware, NotFoundMiddleware } = require('../middlewares')

module.exports = function ({
  HomeRoutes,
  CommentRoutes,
  IdeaRoutes,
  UserRoutes
}) {
  const router = express.Router()
  const apiRoutes = express.Router()

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())

  apiRoutes.use('/home', HomeRoutes)
  apiRoutes.use('/comment', CommentRoutes)
  apiRoutes.use('/idea', IdeaRoutes)
  apiRoutes.use('/user', UserRoutes)

  router.use('/v1/api', apiRoutes)

  router.use(NotFoundMiddleware)
  router.use(ErroMiddleware)

  return router
}
