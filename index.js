//const input = require('@inquirer/prompts'); // CommonJS style import
import { input } from '@inquirer/prompts';
const {prompt} = require('inquirer');
//text textColor shapeChoice shapeColor

const questions = [
  {
    name:"text"
    message: "What is your three letter choice?"
  },

  {
    name:"textColor",
    message: "what is the text color?"
  },

  {
    type: "list",
    name:"shapeChoice",
    message: "what is the shape of choice?",
    choices: ["circle", "square", "triangle"]
  },

  {
    name:"shapeColor",
    message: "what is the shape color?"
  },

]


function init() {
  prompt(questions)
  .then()
}

init()

// await is only valid in async functions and the top level bodies of modules
(async function() {
  // Ask the user to enter the text of their logo
  // Read it into a variable
  const logoName2 = await input({ message: 'Enter the text of your logo' });
  console.log(logoName2);
  
  // Make sure it's only 3 characters long
  if (logoName2.length > 3)
    console.error('Haha!');
    //throw "Must be 3 or less characters";

    // Package for generating an image
    
  //const answer = await input({ message: 'Enter your name' });
  //console.log('hello ' + answer);
})();


// IIFE (Immeditately invoked function expression)

// user selects text (up to 3 characters long)

// async function washDish() {
//   const clean = await clean()
//   const dry = await dry()
// }


// .gitignore

// user selects colour
// user selects shape


/*
import { input } from '@inquirer/prompts'; //ES6-style import

const answer = await input({ message: 'Enter your name' });
*/