const router = require('express').Router();
const Bedroom = require('../db/models').model('bedroom')
module.exports = router;

router.get('/', (req, res, next) => {
  Bedroom.findAll()
    .then( photos => res.json(photos))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Bedroom.findById(req.params.id)
    .then( photo => res.json(photo))
    .catch(next)
})
