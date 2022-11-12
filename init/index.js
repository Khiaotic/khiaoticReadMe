const inquirer = require('inquirer');
const fs = require('fs');
const userGuide = require("lodash")

inquirer.prompt([
{
    type:"input",
    name:"projectTitle",
    message: "What is the title  of your project?",
    
},
{
    type:"input",
    name:"description",
    message: "Write a brief, but through description of your project?",
    
},
{
    type:"input",
    name:"installation",
    message: "Describe the installation process?",
    
},
{
    type:"input",
    name:"usage",
    message: "What function does this project serve?",
    
},
{
    type:"list",
    name:"license",
    message: "Select appropriate license for app",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open",
    ]
    
},
{
    type:"input",
    name:"contribute",
    message: "Contributions always welcomed! Who are the contributors?",
    
},
{
    type:"input",
    name:"tests",
    message: "Is there a test included?",
    
},
])













const text="blah"
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);