
module.exports = function(app) {
  app.use('/', require('../middlewares'))
  app.use('/', require('./home'))
}