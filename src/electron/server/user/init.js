const passport = require('passport')

function initUser (app) {
  app.get('/admin', passport.authenticationMiddleware(), renderAdmin)
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/'
  }))
}

function renderAdmin (req, res) {
  res.send("you're on the admin page.");
}

module.exports = initUser