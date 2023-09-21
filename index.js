// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?'\n\n`,
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n\n',
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed. 
        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ![alt text](assets/images/screenshot.png)\n\n`,
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license',
        choices: [
            {name: 'MIT', value: 'MIT'},
            {name: 'GNU Open Source', value: 'gnu'},
        ],
    },
    {
        type: 'input',
        name: 'credits',
        message: `List your collaborators, if any, with links to their GitHub profiles.`
    },
    {
        type: 'input',
        name: 'contribute',
        message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.\n\n`,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n\n',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub URL \n\n',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email \n\n',
    },
];

const generateREADME = ({ title, description, install, usage, license, credits, contribute, tests, github, email }) =>
  `# ${title} 
  
  ${license}

  ## Description

  ${description}

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${install}
  
  ## Usage

  ${usage}

  ## License
  
  ${license}

  ## Credits

  ${credits}
  
  ## How to Contribute

  ${contribute}

  ## Tests
  
  ${tests}

  ## Questions

  ${github}
  ${email}`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEContent = generateREADME(data)
    fs.writeFile(fileName, READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        });
};

// Function call to initialize app
init();
;