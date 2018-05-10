const router = require('express').Router();
const Coding = require('../db/models').model('coding');

module.exports = router;

router.get('/', (req, res, next)=>{
  Coding.findAll()
    .then( sites => res.json(sites))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Coding.findById(req.params.id)
    .then( site => res.json(site))
    .catch(next)
})
