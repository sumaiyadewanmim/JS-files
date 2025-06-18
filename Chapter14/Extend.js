function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.common = function () {
  console.log("I am common Method");
};

function Square(width, color) {
  Shape.call(this.color);
  this.width = width;
}
extend(Shape, Square);
Square.prototype.draw = function () {
  console.log("Drawing");
};

Square.prototype.common = function () {
  console.log("I am calling from Square and i have Overriding");
};
var sqr = new Square(45, "green");

function Circle(radius, color) {
  Shape.call(this.color);
  this.radius = radius;
}

extend(Shape, Circle);

Circle.prototype.common = function () {
  console.log("I am calling from Circle and i have Overriding");
};

var c = new Circle(4, "Black");

var s = new Shape("Purple");

var shapes = [c, s, sqr];
for (var i of shapes) {
  i.common();
}
