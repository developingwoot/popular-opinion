let surveyRepository = require("../repository/surveys");

function getRandomFive() {
    // get all surveys
    const survey = surveyRepository.get();
    

    let surveyList = [];

    while(surveyList.length < 5)
    {
        var randomSurvey = survey[Math.floor(Math.random() * survey.length)];
        if(!containsObject(randomSurvey, surveyList))
        {
            surveyList.push(randomSurvey);
        }
    }
    

    return surveyList;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

surveyRepository.getRandomFive = getRandomFive;

module.exports = surveyRepository;