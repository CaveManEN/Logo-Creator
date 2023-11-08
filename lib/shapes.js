class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  // Abstract method to be implemented by subclasses
  render(text, textColor) {
    throw new Error('This method should be implemented by subclasses');
  }
}

class Triangle extends Shape {
  render(text, textColor) {
    // Generate SVG for a triangle with the specified color and text
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 10 250, 190 50, 190" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
      </svg>
    `;
  }
}

class Circle extends Shape {
  render(text, textColor) {
    // Generate SVG for a circle with the specified color and text
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  render(text, textColor) {
    // Generate SVG for a square with the specified color and text
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
      </svg>
    `;
  }
}

module.exports = { Triangle, Circle, Square };

  