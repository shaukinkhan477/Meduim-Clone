const express = require('express');
const {
  createArticle,
  getAllArticles,
  getArticleById,
  searchArticles,
  updateArticle,
  deleteArticle,
  unpublishArticle
} = require('../controllers/articleController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for articles
router.route('/').post(protect, createArticle).get(getAllArticles);
router.route('/search').get(searchArticles);
router.route('/:id').get(getArticleById).put(protect, updateArticle).delete(protect, deleteArticle);
router.route('/:id/unpublish').put(protect, unpublishArticle);
router.route('/search').get(searchArticles);

module.exports = router;
 