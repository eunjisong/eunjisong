const apiRouter = require('express').Router();

apiRouter.use('/allphotos', require('./allPhotos'))
apiRouter.use('/bedrooms', require('./bedRooms'))
apiRouter.use('/livingrooms', require('./livingRooms'))
apiRouter.use('/products', require('./products'))

module.exports = apiRouter
