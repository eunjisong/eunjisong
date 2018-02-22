const router = require('express').Router();
const Livingroom = require('../db/models').model('livingroom')
module.exports = router;

router.get('/', (req, res, next) => {
  Livingroom.findAll()
    .then( photos => res.json(photos))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Livingroom.findById(req.params.id)
    .then( photo => res.json(photo))
    .catch(next)
})
