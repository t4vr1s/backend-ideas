let _commentService = null

class CommentController {
  constructor ({ CommentService }) {
    _commentService = CommentService
  }

  async get (req, res) {
    const { commentId } = req.params
    const comment = await _commentService.get(commentId)
    return res.send(comment)
  }

  async update (req, res) {
    const { commentId } = req.params
    const { body } = req
    const commentUpdated = _commentService.update(commentId, body)
    return res.send(commentUpdated)
  }

  async delete (req, res) {
    const { commentId } = req.params
    const commentDeleted = await _commentService.delete(commentId)
    return res.send(commentDeleted)
  }

  async getIdeaComments (req, res) {
    const { ideaId } = req.params
    const comments = await _commentService.getIdeaComments(ideaId)
    return res.send(comments)
  }

  async createComment (req, res) {
    const { body } = req
    const { ideaId } = req.params
    const createComment = await _commentService.createComment(body, ideaId)
    return res.status(201).send(createComment)
  }
}

module.exports = CommentController
