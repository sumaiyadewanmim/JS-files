var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  var position = {
    x: 56,
    y: -100,
  };

  var printProperties = function () {
    console.log("My Width is " + width);
    console.log("My Height is " + height);
  };

  this.getPosition = function () {
    return position;
  };

  this.draw = function () {
    console.log("I am a Rectangle");
    printProperties();
    console.log("Position: X = " + position.x + ", Y = " + position.y);
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
  });
};

var rect = new Rectangle(10, 5);
rect.draw();

console.log(rect.position);
