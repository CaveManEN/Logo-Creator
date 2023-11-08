const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render a triangle with the given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = triangle.render('ABC', 'red');
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 10 250, 190 50, 190" fill="blue" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="20">ABC</text>
      </svg>
    `);
  });
});

describe('Circle', () => {
  it('should render a circle with the given color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svg = circle.render('XYZ', 'green');
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green" font-size="20">XYZ</text>
      </svg>
    `);
  });
});

describe('Square', () => {
  it('should render a square with the given color', () => {
    const square = new Square();
    square.setColor('green');
    const svg = square.render('123', 'blue');
    expect(svg).toEqual(`
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="green" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="20">123</text>
      </svg>
    `);
  });
});


