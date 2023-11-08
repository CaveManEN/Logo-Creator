const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); // Import the 'path' module
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const { text, textColor, shape, shapeColor } = userInput;

  let selectedShape;
  switch (shape.toLowerCase()) {
    case 'circle':
      selectedShape = new Circle();
      break;
    case 'triangle':
      selectedShape = new Triangle();
      break;
    case 'square':
      selectedShape = new Square();
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  selectedShape.setColor(shapeColor);

  const svgContent = selectedShape.render(text, textColor);

  // Define the path to the "examples" directory
  const examplesDirectory = path.join(__dirname, 'examples'); 

  // Specify the full path to the "logo.svg" file within the "examples" directory
  const logoFilePath = path.join(examplesDirectory, 'logo.svg');

  // Write the SVG file to the "examples" directory
  fs.writeFileSync(logoFilePath, svgContent);

  console.log('Generated logo.svg in the examples directory');
}

generateLogo();


