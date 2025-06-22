//151-152 iterator and iterator with symbol

import "./style.css";
console.clear();
console.log("Webpack Activated!");

// const arr = [1, 2, 3];

// function createIterator(collection) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= collection.length,
//         value: collection[i++],
//       };
//     },
//   };
// }

// let iterate = createIterator(arr);

// let iterate = arr[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// let str = "TEXT";
// let iterateText = str[Symbol.iterator]();
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

//153. For of Loop in Javascript

// const arr = [1, 2, 3];

// for (let v of arr) console.log(v);

// let obj = {
//   a: 10,
//   b: 29,

//   *[Symbol.iterator]() {
//     for (let key of Object.keys(this)) {
//       yield [key, this[key]];
//     }
//   },
// };

// for (const [i, v] of obj) {
//   console.log(i, v);
// }

//154

// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
//     return {
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue > self.end ? undefined : currentValue++,
//         };
//       },
//     };
//   },
// };

// for (let value of obj) {
//   console.log(value);
// }

// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let it = generate();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// 155. Set in Javascript

// let set = new Set([1, 2, 3]);
// set.add(5);
// set.add(6);
// console.log(set);
// console.log(set.size);

// console.log(set.has(5));

//156. Map in Javascript

let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);
map.set("d", 40);

// console.log(map);

// map.delete("c");
// console.log(map.size);
// console.log(values());
// console.log(map.keys());
// console.log(map.entries())

// for (let [k, v] of map) {
//   console.log(v, k);
// }

// map.forEach((v, k) => {
//   console.log(k, v);
// });

// 157. Weak Set in Javascript

// let a = { a: 10 },
//   b = { b: 20 };
//let set = new Set ([a,b])
// a = null
// console.log(set)
//let arr = [ ...set]
//console.log(arr[0])

// let weakSet = new WeakSet([a, b]);
// a = null;
// console.log(weakSet.has(b));

//158. Weak Map in Javascript

// let a = { a: "Sumaiya" };
// let b = { b: "Mim" };

// let weakMap = new WeakMap([
//   [a, 45],
//   [b, 75],
// ]);
// a = null;

// console.log(weakMap.get(a));
// console.log(weakMap.has(a));
// console.log(weakMap.has(b));

//159. Class in Javascript

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.draw = function () {
//   console.log(this);
//   console.log("Drawing...");
// };
// let rect1 = new Rectangle(12, 15);
// console.log(rect1);

// class Circle {
//   constructor(r) {
//     this.r = r;
//     this.pi = Math.PI;
//   }

//   area() {
//     return this.pi * this.r * this.r; // πr²
//   }

//   draw() {
//     console.log(
//       `Drawing Circle with radius ${this.r} and area ${this.area().toFixed(2)}`
//     );
//   }
// }

// const c1 = new Circle(5);
// console.log("Area =", c1.area());
// c1.draw();

//160. Class Properties in Javascript
// class Person {
//   name = "Unknown"; // default value
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("Sumaiya Dewan Mim", 22);
// console.log(p1.name);
// console.log(p1.age);

//161******** Static Method of JS
// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   print() {
//     console.log(this.name, this.email);
//   }
//   static create(str) {
//     let person = JSON.parse(str);
//     return new Person(person.name, person.email);
//   }
// }
// let str = '{"name" : "Sumaiya Dewan Mim","email":"sumaiyadewanmim@gmail.com"}';

// let p1 = Person.create(str);
// console.log(p1);

//163***********

//

const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius, name) {
    this[_radius] = radius;
    this[_name] = name;
  }
  [_draw]() {
    console.log("Drawing ... ");
  }
}

let c1 = new Circle(2, "CRED");
console.log(c1);
