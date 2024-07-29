const Comment = require('../models/Comment');

// Add a comment to an article
exports.addComment = async (req, res) => {
  const { content } = req.body;
  const articleId = req.params.articleId;

  try {
    const comment = new Comment({
      content,
      author: req.user._id,
      article: articleId
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get comments for an article
exports.getCommentsForArticle = async (req, res) => {
  const articleId = req.params.articleId;

  try {
    const comments = await Comment.find({ article: articleId }).populate('author', 'username email');
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
