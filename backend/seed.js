const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Article = require('./models/Article');

const seedArticles = async () => {
  await connectDB();

  const articles = [
    {
      title: 'First Article',
      content: 'This is the content of the first article.',
      tags: ['tag1', 'tag2'],
      author: '66a73cdcb8de65fac12cc2be',
      published: true
    },
    {
      title: 'Second Article',
      content: 'This is the content of the second article.',
      tags: ['tag3', 'tag4'],
      author: '66a75dbfb5b029e31d48c4e3', 
      published: true
    },
      {
      title: 'Second Article',
      content: 'This is the content of the second article.',
      tags: ['tag3', 'tag4'],
      author: '66a86b546332692d6a1c43a8', 
      published: true
    }
  ];

  try {
    await Article.insertMany(articles);
    console.log('Articles seeded');
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedArticles();
