var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am rectangle");
    this.printProperties();
  };

  this.printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  };
};

var rect1 = new Rectangle(55, 88);
rect1.draw();
 