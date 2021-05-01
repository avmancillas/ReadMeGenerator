// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = ([
   
           {   
               type:"input",
               name: "title",
               message: "What is the name of the project?",
           },
           {
               type: "input",
               name: "Description",
               message: "What is the description of the project?",
           },
           {
               type: "input",
               name: "Installation",
               message: 'What are the installation instructions?',
           },
           {
               type: "input",
               name: "Usage",
               message: 'What is the usage information?',
           },
           {
               type: "input",
               name: "Guidelines",
               message: 'What are the contribution guidelines?',
           },
           {
               type: 'input',
               name: "Testing",
               message: " What are the test instructions?"
           },
           {
               type:"list",
               name:"license",
               message:"Which license would you like?",
               choices:[
                   "MIT",
                   "Apache License 2.0",
                   "GNU GPLv3",
                   "ISC",
                   "None"
               ]
           },
           {
               type:'input',
               name:"Contributing",
               message:"Who contributed to this project?"
           },
           {
               type:'input',
               name:"Username",
               message:"Enter GitHub username to contact you with questions.",
           },
           {
               type:"input",
               name:"email",
               message:"Enter your email for futher questions",
           }
])


       


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Success!'))
}


// TODO: Create a function to initialize app
function init(){
    
    inquirer.prompt(questions).then(function(data) {
           writeToFile('README.md', generateMarkdown(data));
        })

}
// Function call to initialize app
init();
