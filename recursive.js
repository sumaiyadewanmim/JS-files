// function countDown(number) {
//   if (number <= 0) {
//     console.log("Done!");
//     return;
//   }
//   console.log(number);
//   countDown(number - 1);
// }

// countDown(5);

function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Assalamualaikum,I am Sumaiya");
  sayHi(n - 1);
}
sayHi(1);
