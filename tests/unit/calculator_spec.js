var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can multiply 3x5 and get 15', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 15)
  });

  it('can divide 21/3 and get 7', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 7)
  });

  it('can add 1+4 and get 5', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 5)
  });

  it('can subtract 7-4 and get 3', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 3)
  });

});
