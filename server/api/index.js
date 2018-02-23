const apiRouter = require('express').Router();

//apiRouter.use('/', require('./allwork'))
apiRouter.use('/artwork', require('./artwork'))
apiRouter.use('/coding', require('./coding'))

module.exports = apiRouter
