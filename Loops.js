// For Loops

// console.log("Sumaiya Mim");

// for (var i = 0; i < 100; i++) {
//   console.log(i + 1 + " Sumaiya Dewan Mim");
// } // output will be 1-100 cause started from 0+1 here i = 0

//for (var i = 99; i < 100; i++) {
//console.log(i + 1 + " Sumaiya Dewan Mim");
//} // output will just one time cause started from 99 here i = 99

// for (var i = 99; i < 100; i-=10) {
//   console.log(i + 1 + " Sumaiya Dewan Mim");
// } if we take wrong condition it will become in infinity value

//for (initializer , condition ,increment){
//
//}
//console.log("Odd Numbers: ");
//for (var i = 91; i <= 100; i++) {
// if (i % 2 === 1) {
// console.log(i);
//}
//}
//console.log("Even Numbers: ");
//for (var i = 90; i <= 100; i++) {
//if (i % 2 === 0) {
//console.log(i);
//}
//}

//sum

// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   console.log(sum + " + " + i + " = " + (sum + i));
//   sum += i;
// }
// console.log("result = " + sum);

sum = 0;
console.log("Even Numbers: ");
for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(sum + " + " + i + " = " + (sum + i));
    sum += i;
  }
}
console.log("result = " + sum);

