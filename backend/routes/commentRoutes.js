const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addComment, getCommentsForArticle } = require('../controllers/commentController');
const router = express.Router();

// Routes for comments
router.route('/:articleId').post(protect, addComment).get(getCommentsForArticle);

module.exports = router;
