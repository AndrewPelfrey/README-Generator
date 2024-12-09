// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `[Link to ${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return ` 
  ## License
  
  This Project's license is the ${license} license.
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ${renderLicenseBadge(data.license)}

  - Motivation: ${data.motivation}
  - Reason: ${data.reason}
  - Problem Solved: ${data.problem}
  - What I Learned: ${data.learned}

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Collaborators](#collaborators)
  4. [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Collaborators

  ${data.collaborators}

  ${renderLicenseSection(data.license)}
  `; 
}

export default generateMarkdown;
