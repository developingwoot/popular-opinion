const express = require('express')
const app = express()
const surveyRepository = require('./service/survey-service');

function start()
{
    app.get('/', function (req, res) {
        res.send("You're on the home page.")
    })

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })
}

module.exports = {
    startServer : start
}