const inquirer = require("inquirer");
const fs = require("fs");

// Base Shape class representing a generic shape
class Shape {
  constructor() {
    this.header = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    this.footer = '</svg>';
  }
}

// Circle shape class inheriting from Shape
class Circle extends Shape {
  constructor(color) {
    super();
    this.color = color;
    this.setColor = function(userColor) {
      this.color = userColor;
    };
    this.render = function() {
      return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
    };
  }
}

// Square shape class inheriting from Shape
class Square extends Shape {
  constructor(color) {
    super();
    this.color = color;
    this.setColor = function(userColor) {
      this.color = userColor;
    };
    this.render = function() {
      return `<rect x="75" y="35" width="150" height="150" fill="${this.color}" />`;
    };
  }
}

// Triangle shape class inheriting from Shape
class Triangle extends Shape {
  constructor(color) {
    super();
    this.color = color;
    this.setColor = function(userColor) {
      this.color = userColor;
    };
    this.render = function() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    };
  }
}

// Function to write the SVG string to a file
function writeToFile(fileName, svgString) {
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function to prompt the user for input
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose text color (Enter color keyword or a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape color (Enter color keyword or a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        let svgString = new Shape().header;
        let shapeChoice;

        // Determine the selected shape and create an instance of the corresponding class
        if (answers.shape === "Triangle") {
          shapeChoice = new Triangle(answers.shapeBackgroundColor);
        } else if (answers.shape === "Square") {
          shapeChoice = new Square(answers.shapeBackgroundColor);
        } else {
          shapeChoice = new Circle(answers.shapeBackgroundColor);
        }

        // Generate the SVG string by combining the shape, text, and footer
        svgString += shapeChoice.render();
        svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
        svgString += new Shape().footer;

        // Write the SVG

        writeToFile("logo.svg", svgString);
      }
    });
}

promptUser();
