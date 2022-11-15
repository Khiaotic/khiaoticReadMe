//Packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


const readMeGenerator = require("./util/readMeGenerator");
const writeMdAsync = util.promisify(fs.writeFile);

//Prompt questions for user

function readMePrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief, but thorough description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process?",
    },
    {
      type: "input",
      name: "usage",
      message: "What function does this project serve?",
    },
    {
      type: "list",
      name: "license",
      message: "Select appropriate license for app",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contribute",
      message: "Contributions always welcomed! How to Contribute for this Project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?",
    },

    {
      type: "input",
      name: "questions",
      message:
        "What is your GitHub username so you can be reached for questions?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your professional email address? ",
    },

    {
      type: "input",
      name: "btc",
      message: "What is the beneficiary's wallet address (BTC)? ",
    },
  ]);
}

//Function that generates ReadMe  after inputs
async function developReadMe() {
  try {
    //waits until the response from  client  is entered is finished
    const response = await readMePrompt();
    //runs  after  responses are entered and puts in appropriate content in the readMeGenerator file
    const responseContent = readMeGenerator(response);
    //waits until both functions are completed to write newly created ReadMe file to deploy directory
    await writeMdAsync('./deploy/README.md', responseContent);
    console.log('✅ReadMe.md SUCCESSFULLY written!');
  } catch (err) {
    //catches errors in the process (clean)
    console.log(err);
  }
}

//Function call to init app
developReadMe();
