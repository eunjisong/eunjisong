const router = require('express').Router();
const Photo = require('../db/models').model('photo')
module.exports = router;

router.get('/', (req, res, next) => {
  Photo.findAll()
    .then( photos => res.json(photos))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Photo.findById(req.params.id)
    .then( photo => res.json(photo))
    .catch(next)
})
