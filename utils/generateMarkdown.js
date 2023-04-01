// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else 
  if (license === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else 
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else 
  if (license === "Creative Commons Zero v1.0 Universal") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
  } else
  if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else
  if (license === "GNU General Public License v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else 
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else
  if (license === "Creative Commons Zero v1.0 Universal") {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`
  } else 
  if (license === "Mozilla Public License 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

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

${data.contributors}

## Tests 

 
${data.tests}

## Questions 

If you have any questions about the repository or any feedback, you can contact me at my email ${data.email} and checkout my GitHub profile ${data.username}

## License 

Copyright (c) ${data.name}. All rights reserved. 

Licensed under the ${data.license} license. 

`; 
}

module.exports = generateMarkdown;
