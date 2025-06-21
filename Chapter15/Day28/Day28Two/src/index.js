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

const arr = [1, 2, 3];

for (let v of arr) console.log(v);

let obj = {
  a: 10,
  b: 29,

  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield [key, this[key]];
    }
  },
};

for (const [i, v] of obj) {
  console.log(i, v);
}
