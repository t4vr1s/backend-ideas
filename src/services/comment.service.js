const BaseService = require('./base.service')

let _commnetRepository = null
let _ideaRepository = null

class CommentRepository extends BaseService {
  constructor ({ CommentRepository, IdeaRepository }) {
    super(CommentRepository)
    _commnetRepository = CommentRepository
    _ideaRepository = IdeaRepository
  }

  async getIdeaComments (ideaId) {
    if (!ideaId) {
      const error = new Error()
      error.status = 400
      error.message = 'ideaId must be sent'
      return error
    }
    const idea = await _ideaRepository.get(ideaId)

    if (!idea) {
      const error = new Error()
      error.status = 404
      error.message = 'idea does not exist'
      return error
    }

    const { comments } = idea
    return comments
  }

  async createComment (comment, ideaId) {
    if (!ideaId) {
      const error = new Error()
      error.status = 400
      error.message = 'ideaId must be sent'
      return error
    }

    const idea = await _ideaRepository.get(ideaId)

    if (!idea) {
      const error = new Error()
      error.status = 404
      error.message = 'idea does not exist'
      return error
    }

    const createdComment = await _commnetRepository.create(comment)

    idea.comments.push(createdComment)

    return await _ideaRepository.update(ideaId, { comments: idea.comments })
  }
}

module.exports = CommentRepository
