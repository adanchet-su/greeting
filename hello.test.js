var utils  = require('course-utilities');
//var hello = utils.load('./hello.js', 'hello');

// test('outputs the correct string', () => {
//   expect(hello()).toBe("Hello World!");
// });

//var utils = require('course-utilities');
var greeting = utils.load('./hello.js', 'greet');
//test1
describe('test greet()', function () {
    it('should be called', function () {
        expect(greet('Lexine')).toBeCalled();
    });
    it('passing in single name', function () {
        expect(greet('Lexine')).toEqual("Hello, 1Lexine");
    })
});