const express = require('express');
const {
  createArticle,
  getAllArticles,
  getArticleById,
  searchArticles,
  updateArticle,
  deleteArticle,
  unpublishArticle,
  addComment,
  addReaction
} = require('../controllers/articleController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for articles
router.route('/').post(protect, createArticle).get(getAllArticles);
router.route('/search').get(searchArticles);
router.route('/:id').get(getArticleById).put(protect, updateArticle).delete(protect, deleteArticle);
router.route('/:id/unpublish').put(protect, unpublishArticle);

// Routes for comments and reactions
router.route('/:id/comments').post(protect, addComment);
router.route('/:id/reactions').post(protect, addReaction);

module.exports = router;
