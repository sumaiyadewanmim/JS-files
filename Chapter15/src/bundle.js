"use strict";

var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Mim Queen";
  console.log("Welcome ".concat(name, " to ES6 world! \uD83D\uDC51"));
};
greet();
