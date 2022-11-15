function readMeGenerator(response) {
    return `
<h1 align="center">${response.projectTitle} </h1>

## Overview (description)
<h3 align="center">${response.description}</h3>

! [badge](https://shields.ioi/bagde/license-${response.license}-yellow)<br />
This application is  covered by the ${response.license}

## 👁️Preview
![image]()


## 📋Table of Contents
-[License](#license)
-[Overview](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contributors](#contribute)
-[Tests](#tests)
-[Questions](#questions)


## 📃Installation
To clone and use this application, you'll need Git and Node.js (npm equipped) installed on your computer


## 🧰✍️Usage

## 🫱🏽‍🫲🏼Contributors

## 🧪Tests

## Questions
Find me on Github: ${response.question} <br />
<br />
If you have any questions or concerns please contact me through email: ${response.email}

## 🪙 Support
This is FREE, OPEN-SOURCE software.  If you'd like to support the development of future projects or "say thanks," you can donate BTC at: ${response.btc}.


<h3 align="center">This ReadMe was generated by <button> href=""</button> and coded with 💖</h3>
`;
}

module.exports = readMeGenerator;

