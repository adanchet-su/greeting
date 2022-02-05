name1 = "Lexine"
array = ["Christine, Alex, Gabrielle"]

var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('outputs the correct string', () => {
    expect(greet()).toBe("Hello there");
  });
test('outputs hello name', () => {
    expect(greet(name1)).toBe("Hello " + name1);
  });
test('outputs HELLO NAME', () => {
    expect(greet(name1)).toBe("HELLO " + name1.toUpperCase());
  });
  