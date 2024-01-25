import { input, select } from "@inquirer/prompts";

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const logotext = await input({message: "what is the text of your logo?"});
if(logotext.length > 3)
  console.log('can not be greater than 3 characters');

const logoshape = await select({message: "what is the shape of your logo?", choices: [{
  name: 'circle',
  value: 'circle'
},
{
  name: 'triangle',
  value: 'triangle'
},
{
  name: 'square',
  value: 'square'
},
]});

console.log(logotext);
console.log(logoshape);
