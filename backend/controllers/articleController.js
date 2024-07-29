const Article = require('../models/Article');

// Create a new article
exports.createArticle = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const article = new Article({
      title,
      content,
      tags,
      author: req.user._id
    });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({ published: true }).populate('author', 'username email');
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('author', 'username email');
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an article
exports.updateArticle = async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Check if the user is the author of the article
    if (article.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    article.title = title || article.title;
    article.content = content || article.content;
    article.tags = tags || article.tags;
    article.updatedAt = Date.now();

    await article.save();
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Check if the user is the author of the article
    if (article.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    await article.remove();
    res.status(200).json({ message: 'Article removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Unpublish an article
exports.unpublishArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Check if the user is the author of the article
    if (article.author.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    article.published = false;
    await article.save();
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
