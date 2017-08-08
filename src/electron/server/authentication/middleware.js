function authenticationMiddleware () {
  return function (req, res, next) {
    console.log("middleware req.body", req.body);
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
}

module.exports = authenticationMiddleware