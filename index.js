/** Acceptance Criteria 
 * GIVEN a command-line application that accepts user input
 * WHEN I am prompted for information about my application repository
 * THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
 * WHEN I enter my project title
 * THEN this is displayed as the title of the README
 * WHEN I enter a description, installation instructions, usage information, contribution guidlines, and test instructions
 * THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
 * WHEN I choose a license for my application from a list of options
 * THEN a badge for that license is added near the top of the README and a notice is added to the section of the READE entitled License that explains which license the application is covered under
 * WHEN I enter my Github username
 * THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
 * WHEN I enter my email address
 * THEN This is added to the section of the REAMDME entitled Questions, with instructions on how to reach me with additional questions
 * WHEN I click on the links in the Table of Contents
 * THEN I am taken to the coressponding section of the README
 */



// TODO: Include packages needed for this application

const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown"); 

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "Username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "Name",
        message: "What is your first and last name?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "Year",
        message: "What is the current year? (e.g. 2023).",
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description for your application.",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your application.",
        choices: ["None", "Apache 2.0", "GNU General Public License v3.0", "MIT", "BSD 2-Clause Simplified", "BSD 3-Clause New or Revised", "Boost Software 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1"]
    },
    {
        type: "input",
        name: "Installation",
        message: "Describe the installation process if there is any.",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the application usage for?",
    },
    {
        type: "input",
        name: "Tests",
        message: "What are the test instructions?"
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who are the contributors of this application if any?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Generating Your Professional README.");
            writeToFile("./demo/README.md",generateMarkdown({ ...data}));
        })
};

// Function call to initialize app
init();
