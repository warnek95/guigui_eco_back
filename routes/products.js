const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const products = [
  {id: uuid.v4(), title: 'Lorem ipsum', content: 'buy some milk', isEdit: false, isTrue: false},
  {id: uuid.v4(), title: 'Lorem ipsum', content: 'play mario kart', isEdit: false, isTrue: false},
  {id: uuid.v4(), title: 'Lorem ipsum', content: 'play mario kart', isEdit: false, isTrue: false}
]

router.get('/', function(req, res, next) {
  res.json({products});
});

router.post('/', function(req, res, next) {
  const product = req.body.product;
  product.id = uuid.v4();
  products.push(product);
  res.status(201).json({product});
});

router.put('/:id', function(req, res, next) {
  const idx = products.findIndex(product => product.id === req.params.id);
  products[idx] = req.body.product;
  res.json({product: req.body.product});
});

router.delete('/:id', function(req, res, next) {
  const idx = products.findIndex(product => product.id === req.params.id);
  products.splice(idx, 1);
  res.json().status(200);
});

module.exports = router;
