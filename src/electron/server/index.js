const express = require('express')
const app = express()
const surveyRepository = require('./service/survey-service');
const passport = require('passport');
const session = require('express-session')

function start()
{
    // Get our API routes
    const api = require(__dirname + '/routes/api');

    require('./authentication').init(app)

    app.use(session({
        secret: 'tasy-tacos',
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    require('./user').init(app)

    // Set our api routes
    app.use('/api', api);

    app.get('/', function (req, res) {
        res.send("You're on the home page.");
    })

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })
}

module.exports = {
    startServer : start
}