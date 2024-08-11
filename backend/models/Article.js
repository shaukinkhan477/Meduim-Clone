const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const ReactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['like', 'dislike'], required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});





const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: true
  },
  comments: [CommentSchema],
  reactions: [ReactionSchema]
});

ArticleSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Article', ArticleSchema);
