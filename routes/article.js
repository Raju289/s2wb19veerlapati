var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Article', { title: 'Search Results for Article' });
});

module.exports = router;
