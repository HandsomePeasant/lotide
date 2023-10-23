const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // => Fail
assertEqual(1, 1); // => Pass
assertEqual(10, "10"); // => Fail
assertEqual(10, "Ten"); // => Fail
assertEqual("A String", "A String"); // => Pass
assertEqual("a string", "A String"); // => Fail