var express = require('express');
var router = express.Router();

var products = [
  {id: 1, title: 'Lorem ipsum', content: 'buy some milk', isEdit: false, isTrue: false},
  {id: 2, title: 'Lorem ipsum', content: 'play mario kart', isEdit: false, isTrue: false},
  {id: 3, title: 'Lorem ipsum', content: 'play mario kart', isEdit: false, isTrue: false}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({products});
});

module.exports = router;
