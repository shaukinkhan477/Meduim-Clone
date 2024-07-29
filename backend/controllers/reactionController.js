const Reaction = require('../models/Reaction');
const Article = require('../models/Article');

// Add a reaction to an article
exports.addReaction = async (req, res) => {
  const { type } = req.body;
  const articleId = req.params.articleId;

  try {
    const existingReaction = await Reaction.findOne({ article: articleId, user: req.user._id });
    if (existingReaction) {
      return res.status(400).json({ error: 'User has already reacted to this article' });
    }

    const reaction = new Reaction({
      article: articleId,
      user: req.user._id,
      type
    });

    await reaction.save();
    res.status(201).json(reaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get reactions for an article
exports.getReactionsForArticle = async (req, res) => {
  const articleId = req.params.articleId;

  try {
    const reactions = await Reaction.find({ article: articleId }).populate('user', 'username email');
    res.status(200).json(reactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
