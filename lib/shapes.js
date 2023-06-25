// Define the base class Shape
class Shape {
  constructor() {
    // Initialize the SVG header and footer
    this.header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.footer = `</svg>`;
  }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
  constructor(color) {
    super(); // Call the constructor of the base class
    this.color = color; // Initialize the color property

    // Set the color of the circle
    this.setColor = function (userColor) {
      this.color = userColor;
    };

    // Render the SVG markup for the circle
    this.render = function () {
      return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
    };
  }
}

// Define the Square class that extends Shape
class Square extends Shape {
  constructor(color) {
    super(); // Call the constructor of the base class
    this.color = color; // Initialize the color property

    // Set the color of the square
    this.setColor = function (userColor) {
      this.color = userColor;
    };

    // Render the SVG markup for the square
    this.render = function () {
      return `<rect x="75" y="35" width="150" height="150" fill="${this.color}" />`;
    };
  }
}

// Define the Triangle class that extends Shape
class Triangle extends Shape {
  constructor(color) {
    super(); // Call the constructor of the base class
    this.color = color; // Initialize the color property

    // Set the color of the triangle
    this.setColor = function (userColor) {
      this.color = userColor;
    };

    // Render the SVG markup for the triangle
    this.render = function () {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    };
  }
}

// Export the Circle, Square, and Triangle classes as a module
module.exports = {
  Circle,
  Square,
  Triangle
};
