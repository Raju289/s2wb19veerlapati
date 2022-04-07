var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electronics', { title: 'search results for electronics' });
});

module.exports = router;
