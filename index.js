const fs = require('fs');
const inquirer = require("inquirer");
const stringGen = require('./string');

const {stringGenerator} = stringGen;

// TODO: Create an array of questions for user input
const questions = [{
    type: `input`,
    name: `petname`,
    message: 'What is pet name'
},
{
    type: `input`,
    name: `petage`,
    message: 'What is pet age'
}];

const init = () =>{
    inquirer.prompt(questions).then((answers) => {
        const {petname, petage} = answers;

        fs.writeFile('read.txt', stringGenerator(petname, petage), (err)=>{
            if (err) throw err;
            console.log("The file has been saved!");
        })
    })
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
