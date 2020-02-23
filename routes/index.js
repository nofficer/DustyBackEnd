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
    

  });

  newArticle.save().then(article => res.json(article))
})


module.exports = router;
