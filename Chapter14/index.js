//129. First Prototypical Inheritance in Javascript

function Shape() {}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log("Drawing");
};

//reset constryctor 130
// Square.prototype = {
//   test: function () {},
// };

var Shape = new Shape();
var sqr = new Square(45);

//shape > Shape > Object
//sqr > Square > Shape > Object

//sqr > Square > Shape > Object

// function Circle() {}
// Circle.prototype = Object.create(Shape.prototype);
