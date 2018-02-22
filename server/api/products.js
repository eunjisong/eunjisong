const router = require('express').Router();
const Product = require('../db/models').model('product')
module.exports = router;

router.get('/', (req, res, next) => {
  Product.findAll()
    .then( photos => res.json(photos))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then( photo => res.json(photo))
    .catch(next)
})
