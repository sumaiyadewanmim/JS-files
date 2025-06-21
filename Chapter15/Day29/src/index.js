import "./style.css";

const greet = (name = "Sumaiya Dewan Mim") => {
  console.log(`Welcome ${name} to ES6 world! 👑`);
};

greet();

//139. Template String in Javascript
// var age = 23;
// var name = "Sumaiya Dewan Mim";
// console.log(
//   `My name is ${name} and I am ${age} years old . I am ${
//     age < 18 ? "not " : " "
//   }adult`
// );

// function add(a, b) {
//   return a + b;
// }

// let add = (a, b) => a + b;
// console.log(add(45, 50));

// let sqr = (X) => X * X;
// console.log(sqr(12));

// let obj = {
//   name: "Sumaiya Dewan Mim",
//   print: function () {
//     console.log(this.name);
//     setTimeout(() => {
//       console.log(this);
//       alert(`Hello, ${this.name}`);
//     }, 1000);
//   },
// };

// obj.print();

//143
// function sqr(n) {
//   return n * n;
// }
// console.log(sqr(5));

//144
// for (let v of arr) {
//   console.log(v);
// }

// for (let v of "Sumaiya Dewan Mim") {
//   console.log(v);
// }

// let obj = {
//   a: 10,
//   b: 20,
// };
// for (let v of obj) {
//   console.log(v);
// }

// let obj = {
//   start: 1,
//   end: 10,
//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
//     return {
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue++,
//         };
//       },
//     };
//   },
// };

// for (let v of obj) [console.log(v)];

//145. Rest & Spread Operator in Javascript

// function sum(...rest) {
//   return rest.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3, 4, 5));

//146 Enhance Object in JavaScript

// let a = 10,
//   b = 20;
// let obj = {
//   a,
//   b,
//   print() {
//     console.log(this);
//   },
// };
// obj.print();

//147: Destructuring in Javascript

// var person = {
//   name: "Sumaiya Dewan Mim",
//   email: "sumaiyadewanmim@gmail.com",
//   address: {
//     city: "Dhaka",
//     country: "Bangladesh",
//   },
// };

// let {
//   name,
//   email,
//   address,
//   address: { city, country },
// } = person;
// console.log(name, email, city, country);

// var obj = {
//   a: 10,
//   b: 20,
// };
// console.log(Object.entries(obj));

// var objArr = [
//   ["a", 10],
//   ["b", 20],
// ];
// console.log(Object.fromEntries(objArr));

//149. Symbols in Javascript
let s1 = Symbol();
let s2 = Symbol("test symbol");

console.log(s1);
console.log(s2);

