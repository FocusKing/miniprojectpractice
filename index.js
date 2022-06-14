const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator')

const questions = [{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },

    {
        type: 'input',
        message: 'What\'s your location?',
        name: 'location',
    },

    {
        type: 'input',
        message: 'What\'s your LinkedIn?',
        name: 'linkedIn',
    },

    {
        type: 'input',
        message: 'What\'s your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What\'s your story?',
        name: 'bio',
    },
    {
        type: 'rawlist',
        message: 'What License was this created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ]
    },
];
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generatePage(answers);
});