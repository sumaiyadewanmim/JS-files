console.clear();
// console.log("testing");
// // let n = Number.parseInt([]);
// // console.log(n);

// function changeToInt(v) {
//   let result = Number.parseInt(v);
//   if (!result) {
//     return "Please Provide a value which is able to convert in Int";
//   }
//   return result;
// }

// let result = changeToInt("86.25");
// console.log(result);

//171:Error handling with Try Catch in Javascript

// function makeWords(text) {
//   try {
//     let str = text.trim();
//     let words = str.split(" ");
//     return;
//   } catch (e) {
//     // console.log(e.message);
//      console.log('Please Provide a valid Text');
//   }
//let str = text.trim()
//let words = str.spilt( '' )
//return words
// }
// let words = makeWords(86);
// console.log(words);

try {
  console.log("i am line 1");
  throw new Error("I am Your Error");
  console.log("I am line 2");
} catch (e) {
  console.log(e.messege);
}
