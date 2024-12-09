// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please thoroughly describe your project:'

    }, {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
    }, {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
    }, {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    }, {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
    }, {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install and run your project?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for someone to use:',
    }, {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators (if any) and links to their Github',
    }, {
        type: 'confirm',
        name: 'useLicense',
        message: 'Did you use a license?',
    }, {
        type: 'input',
        name: 'license',
        message: 'What license did you use?',
        when: (answers) => answers.useLicense,
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md successfully created');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
