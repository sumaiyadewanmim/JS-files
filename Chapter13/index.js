//122:Multi Level Inheritence

// function Person(name) {
//   this.name = name;
// }

// var p1 = new Person("Sumaiya Dewan Mim");
// console.log(p1);

//123
// var person = {
//   name: "Sumaiya Mim",
// };

// var descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor);

//Example of toSring
//let person = {
//   name: "Mim",
//   toString: function() {
//     return `My name is ${this.name}`;
//   }
// };

// console.log(person.toString());

// Object.defineProperty(person, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// 126
function Square(width) {
  this.width = width;
  this.getwidth = function () {
    console.log("Width is " + this.width);
    //this.draw();
  };
}

Square.prototype = {
  constructor: Square,
  draw: function () {
    this.getwidth();
    console.log("Draw");
  },
  toString: function () {
    return "My Width is = " + this.width;
  },
};

var sqr1 = new Square(10);
var sqr2 = new Square(5);
//Iterate Object and HasOwnProperty in JS
//console.log(Object.keys(sqr1))

//for (var i in sqr1){
// console.log(i)
//}
//128. Don't Overwrite Built in Prototypes in Javascript
