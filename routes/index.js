var express = require('express');
var router = express.Router();

const Article = require('../models/Articles')






/* GET home page. */
router.get('/', (req,res) => {
  Article.find()
    .then(articles => res.json(articles))
})



router.post('/', (req, res) => {
  const newArticle =  new Article({
    title: 'random title2',
    imageUrl: 'https://i1.wp.com/dustyorgan.com/wp-content/uploads/2020/02/November-22-2019-4.png?w=560&ssl=1',
    description: 'random description2',
    category: 'random category2',
    preview: 'random preview2'
  });

  newArticle.save().then(article => res.json(article))
})


module.exports = router;
