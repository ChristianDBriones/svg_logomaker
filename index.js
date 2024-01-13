//const input = require('@inquirer/prompts'); // CommonJS style import
import { input } from '@inquirer/prompts';

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




// .gitignore

// user selects colour
// user selects shape


/*
import { input } from '@inquirer/prompts'; //ES6-style import

const answer = await input({ message: 'Enter your name' });
*/