# JavaScript Calculator Testing

As a user I want to be able to perform simple arithmetic functions in a web browser.

The code provided has a calculator object with functions to add, subtract, divide, and multiple given numbers to a previous total (public/js/calculator.js). This allows the user to chain multiple operations one after the other, and then ask for the total.

This is integrated into an HTML page that gives a 'calculator layout' of buttons which operate the functionality of the JavaScript (public/app.js and index.html).

The calculator object has properties to keep track of calculations as it performs them.

You can run the code from the terminal with `npm start` or `node server.js`, you can then view the calculator at http://localhost:3000.

##SETUP:
Run `npm install` to install all dependencies.

You can run the unit tests from the terminal with `npm start`.

You can run the integration/acceptance tests from the terminal with `webdriver-manager start` and `protractor conf.js` in another terminal tab - the node server must also be running for this to work.

##Tasks

###Unit Tests

You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.

All of these functions should be tested thoroughly:

  - calculator.add()
  - calculator.subtract()
  - calculator.multiply()
  - calculator.divide()
  - calculator.numberClick()
  - calculator.operatorClick()
  - calculator.clearClick()

### Integration/Acceptance Tests

You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish. The framework provided to do this is Protractor JS using Chai for assertions, and there is one sample test written in `/tests/integration/tests.js`. 

You should write tests to ensure:

  - Do the number buttons work to update the display of the running total?
  - Do each of the arithmetical operations work to update the display with the result of the operation?
  - Can we chain multiple operations together?
  - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)

What does the code do in exceptional circumstances?

  - If you divide by zero, what is the effect?
  - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.





