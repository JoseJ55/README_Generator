// Function that gets data and places in correct areas in string then returns string.
const stringGenerator = (projectname, describe, install, usage, contribution, test, license, git, email) =>{
    const str = 
`# ${projectname}, ${license[1]}

## Table of Context
[Description](#description)\n
[Installation](#installation)\n
[Use](#use)\n
[Contribution](#contribution-guidlines)\n
[Test](#test)\n
[Questions](#questions)\n
[License](#license)

## Description
This project ${describe}.

## Installation
This is how to install the project:\n
${install}.

## Use
To use this you need to ${usage}.

## Contribution Guidlines
${contribution}

## Test
To test this porject you need to:\n
${test}

## Questions
GitHub link: [${git}](${git})\n
Email: [${email}](${email})

## License
${license[0]}: ${license[2]}
`;
    return str;
}

module.exports = {
    stringGenerator
}