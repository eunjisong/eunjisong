const router = require('express').Router();
const Artwork = require('../db/models').model('artwork');
module.exports = router;

router.get('/', (req, res, next)=>{
  Artwork.findAll()
    .then( artworks => res.json(artworks))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Artwork.findById(req.params.id)
    .then( art => res.json(art))
    .catch(next)
})
