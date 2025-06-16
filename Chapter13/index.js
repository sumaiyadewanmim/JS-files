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

function Square(width) {
  this.width = width;

  this.draw = function () {
    console.log("Draw");
  };
}
var sqr1 = new Square(10);
var sqr2 = new Square(5);
