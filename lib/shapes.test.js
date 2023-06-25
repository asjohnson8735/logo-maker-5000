const { Circle, Square, Triangle } = require('./shapes');

describe('Shape Classes', () => {
  let circle;
  let square;
  let triangle;

  beforeEach(() => {
    circle = new Circle('red');
    square = new Square('blue');
    triangle = new Triangle('green');
  });

  describe('Circle', () => {
    test('should set the color correctly', () => {
      circle.setColor('yellow');
      expect(circle.color).toBe('yellow');
    });

    test('should render the SVG markup for the circle', () => {
      const expectedMarkup = '<circle cx="150" cy="110" r="80" fill="red" />';
      expect(circle.render()).toBe(expectedMarkup);
    });
  });

  describe('Square', () => {
    test('should set the color correctly', () => {
      square.setColor('purple');
      expect(square.color).toBe('purple');
    });

    test('should render the SVG markup for the square', () => {
      const expectedMarkup = '<rect x="75" y="35" width="150" height="150" fill="blue" />';
      expect(square.render()).toBe(expectedMarkup);
    });
  });

  describe('Triangle', () => {
    test('should set the color correctly', () => {
      triangle.setColor('orange');
      expect(triangle.color).toBe('orange');
    });

    test('should render the SVG markup for the triangle', () => {
      const expectedMarkup = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
      expect(triangle.render()).toBe(expectedMarkup);
    });
  });
});
