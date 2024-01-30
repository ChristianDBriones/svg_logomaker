import { input, select } from "@inquirer/prompts";
import fs from 'fs';
import path from 'path';
import { Square, Circle, Triangle } from "./lib/shapes.js";

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
const logotext = await input({ message: "what is the text of your logo?" });
if (logotext.length > 3)
  console.log('can not be greater than 3 characters');

const logoshape = await select({
  message: "what is the shape of your logo?", choices: [{
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
  ]
});
const logocolor = await input({
  message: "what is the color of your logo?"
});


const logotextcolor = await input({
  message: "what is the color is the text of your logo?"
});

if ("square" === logoshape) {
  const square = new Square(logotextcolor, logotext, logocolor);
  const svg = square.getSvg()
  writeToFile("logo.svg", svg)
}

if ("triangle" === logoshape) {
  const triangle = new Triangle(logotextcolor, logotext, logocolor);
  const svg = square.getSvg()
  writeToFile("logo.svg", svg)
}

if ("circle" === logoshape) {
  const circle = new Circle(logotextcolor, logotext, logocolor);
  const svg = circle.getSvg()
  writeToFile("logo.svg", svg)
}