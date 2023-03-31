// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![Github license]`
  } else 
  if (license === "GNU General Public License v3.0") {
    return `![Github license]`
  } else 
  if (license === "MIT") {
    return `![Github license]`
  } else 
  if (license === "BSD 2-Clause Simplified") {
    return `![Github license]`
  } else
  if (license === "BSD 3-Clause New or Revised") {
    return `![Github license]`
  } else 
  if (license === "Boost Software 1.0") {
    return `![Github license]`
  } else 
  if (license === "Creative Commons Zero v1.0 Universal") {
    return `![Github license]`
  } else 
  if (license === "Eclipse Public License 2.0") {
    return `![Github license]`
  } else 
  if (license === "GNU Affero General Public License v3.0") {
    return `![Github license]`
  } else 
  if (license === "GNU General Public License v2.0") {
    return `![Github license]`
  } else 
  if (license === "GNU Lesser General Public License v2.1") {
    return `![Github license]`
  } 
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This application is licensed under the ${license} license. `;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents 

- [Installation](#installation)

- [Usage](#usage)

- [Contributors](#contributors)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)

## Installation 

${data.installation}

## Usage

${data.usage} 

## Contributors

Contact me at ${data.contributors}

## Tests 

To run tests, run these commands 
${data.tests}

## Questions 

If you have any questions about the repository or any feedback, you can reach me at ${data.email}

## License 

Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved. 

Licensed under the ${data.license} license. 

`; 
}

module.exports = generateMarkdown;
