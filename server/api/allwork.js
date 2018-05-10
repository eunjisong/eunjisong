const router = require('express').Router();
const Artwork = require('../db/models').model('artwork');
const Coding = require('../db/models').model('coding');

router.get('/', (req, res, next) => {
  Artwork.findAll()
    .then( arts => {
      Coding.findAll()
        .then( sites => {
          res.json( arts.concat(sites))
        })
    })
    .catch(next)


})

module.exports = router;
