const fs = require('fs');
const inquirer = require("inquirer");
const stringGen = require('./string');

const {stringGenerator} = stringGen;

// questions that are asked for information 
const questions = [{
    type: `input`,
    name: `projectname`,
    message: 'What is the name of this project:'
},
{
    type: `input`,
    name: `describe`,
    message: 'Describe What project does:'
},
{
    type: `input`,
    name: `install`,
    message: 'How do you install this project:'
},
{
    type: `input`,
    name: `usage`,
    message: 'How do you use this project:'
},
{
    type: `input`,
    name: `contribution`,
    message: 'Enter guidelines for contributors:'
},
{
    type: `input`,
    name: `test`,
    message: 'Enter information on how to test this project:'
}, 
{
    type: `list`,
    name: `license`,
    message: 'Pick a license for this project:',
    choices: ['License1', 'License2', 'License3', 'License4']
},
{
    type: `input`,
    name: `git`,
    message: 'Enter github url:',
},
{
    type: `input`,
    name: `email`,
    message: 'Enter your email:',
}];

// This function initilizes the inquirer starts to enter prompts
const init = () =>{
    inquirer.prompt(questions).then((answers) => {
        const {projectname, describe, install, usage, contribution, test, license, git, email} = answers;
        // File needed here to write to.
        const file = './testREAD/README.md';
        var li = []

        // The switch case looks at which choice was pick and depending on which on was it pushs 
        // into an array all the nessesary information.[name, badge, diescription]
        switch(license){ // Not sure what kinds of licenses are needed. Need to change later on.
            case 'License1':
                li.push('License1');
                li.push('L1');
                li.push('This is the first and basic license.');
                break;
            case 'License2':
                li.push('License2');
                li.push('L2');
                li.push('This is the second and better license.');
                break;
            case 'License3':
                li.push('License3');
                li.push('L3');
                li.push('This is the third and great license.');
                break;
            case 'License2':
                li.push('License2');
                li.push('L2');
                li.push('This is the last and best license.');
                break;
        }

        // calls stringGenerator from string.js with ths data needed.
        const datastr = stringGenerator(capitalcase(projectname), describe, install, usage, contribution, test, li, git, email);

        writeToFile(file, datastr);
    })
}

// Small function to make first letter in a string uppercase.
const capitalcase = (string) =>{
    let i = string[0].toUpperCase();
    let j = string.slice(1,string.length);
    string = i + j
    return string;
}

// THis function writes to README.md file and enters the data.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err) throw err;
        console.log("The file has been saved!");
    })
}
init();