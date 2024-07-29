const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addReaction, getReactionsForArticle } = require('../controllers/reactionController');
const router = express.Router();

// Routes for reactions
router.route('/:articleId').post(protect, addReaction).get(getReactionsForArticle);

module.exports = router;
