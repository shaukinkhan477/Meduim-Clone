const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  unpublishArticle
} = require('../controllers/articleController');
const router = express.Router();

// Routes for articles
router.route('/').post(protect, createArticle).get(getAllArticles);
router.route('/:id').get(getArticleById).put(protect, updateArticle).delete(protect, deleteArticle);
router.route('/:id/unpublish').put(protect, unpublishArticle);

module.exports = router;
