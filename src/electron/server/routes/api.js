const express = require('express');
const router = express.Router();
const db = require('../service/survey-service');
const passport = require('passport')

/* GET api listing. */
router.get('/surveys/', (req, res) => {
    let allSurveys = db.getAll();
    
    res.setHeader('Content-Type', 'application/json');
    res.json(allSurveys);
});

/* GET api listing. */
router.get('/surveys/game', (req, res) => {
    let game = db.getRandomFive();
    
    res.setHeader('Content-Type', 'application/json');
    res.json(game);
});

/* GET api listing. */
router.get('/surveys/:id', (req, res) => {
    let survey = db.getById(req.params.id);
    console.log("survey returned", survey);
    res.setHeader('Content-Type', 'application/json');
    res.json(survey);
});

router.post('/surveys/', passport.authenticate('local', (req, res) => {
    let survey = req.body.survey;
    res.setHeader('Content-Type', 'application/json');

    survey.id = db.addItem(survey);

    res.json(survey);
}))

router.put('/surveys/:id', passport.authenticate('local', (req, res) => {
    let survey = req.body;
    res.setHeader('Content-Type', 'application/json');
    survey = db.updateItem(survey);
    res.json(survey);
}))

router.delete('/surveys/:id',passport.authenticate('local', (req, res) => {
    survey = db.removeItem(req.params.id);    
    res.json(survey);
}))

module.exports = router;