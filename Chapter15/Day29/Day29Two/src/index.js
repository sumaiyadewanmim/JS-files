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

let set = new Set([1, 2, 3]);
set.add(5);
set.add(6);
console.log(set);
console.log(set.size);

console.log(set.has(5));
