//109 Factory pattern

var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am a Rectangle");
      this.printProperties();
    },
    printProperties: function () {
      console.log("My Width is " + this.width);
      console.log("My height is " + this.height);
    },
  };
};

var rect1 = createRect(300, 500);
rect1.draw();
var rect2 = createRect(30, 50);
rect2.draw();
