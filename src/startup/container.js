const { createContainer, asClass, asValue, asFunction } = require('awilix')

// config
const config = require('../config')
const app = require('.')

// service
const { HomeService } = require('../services')

// controllers
const { HomeController } = require('../controllers')

// routes
const { HomeRoutes } = require('../routes/index.routes')
const Routes = require('../routes')

// models
const { Comment, Idea, User } = require('../models')

// repositories
const { CommentRepository, IdeaRepository, UserRepository } = require('../repositories')

const container = createContainer()

// injection of dependencies
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    Comment: asValue(Comment),
    Idea: asValue(Idea),
    User: asValue(User)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  })

module.exports = container
