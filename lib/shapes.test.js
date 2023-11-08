const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render a triangle with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = triangle.render('ABC', 'red'); // Text and text color added
    // Updated expectation to include the full SVG content
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="red">ABC</text>
      </svg>
    `);
  });
});

describe('Circle', () => {
  it('should render a circle with the given color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svg = circle.render('XYZ', 'green'); // Text and text color added
    // Updated expectation to include the full SVG content
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="green">XYZ</text>
      </svg>
    `);
  });
});

describe('Square', () => {
  it('should render a square with the given color', () => {
    const square = new Square();
    square.setColor('green');
    const svg = square.render('123', 'blue'); // Text and text color added
    // Updated expectation to include the full SVG content
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="green" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="blue">123</text>
      </svg>
    `);
  });
});

