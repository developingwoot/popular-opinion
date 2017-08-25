const express = require('express')
const app = express()
const surveyRepository = require('./service/survey-service');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

function start()
{
    require('./authentication').init(app)

    app.use(session({
        secret: 'tasy-tacos',
        resave: true,
        saveUninitialized: true
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    require('./user').init(app)

    // Get our API routes
    const api = require(__dirname + '/routes/api');

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