const fs = require('fs').promises;
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Importing the inquirer module dynamically
async function loadDependencies() {
  const inquirer = await import(('inquirer')).default;
  return inquirer;
}

async function generateLogo() {
  try {
    // Dynamically import the inquirer module
    const inquirerModule = await import('inquirer');
    const inquirer = inquirerModule.default;
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: input => input.length <= 3 || 'Text must be up to three characters long.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
        validate: input => /^#?[0-9A-Fa-f]{6}$|^#?[0-9A-Fa-f]{3}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color.'
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
        validate: input => /^#?[0-9A-Fa-f]{6}$|^#?[0-9A-Fa-f]{3}$|^[a-zA-Z]+$/.test(input) || 'Please enter a valid color.'
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
        throw new Error('Invalid shape choice');
    }

    selectedShape.setColor(shapeColor);
    const svgContent = selectedShape.render(text, textColor);

    const examplesDirectory = path.join(__dirname, 'examples');
    await fs.mkdir(examplesDirectory, { recursive: true }); // Create the directory if it doesn't exist

    const logoFilePath = path.join(examplesDirectory, 'logo.svg');
    await fs.writeFile(logoFilePath, svgContent);

    console.log(`Generated logo.svg in the examples directory: ${logoFilePath}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

generateLogo();



