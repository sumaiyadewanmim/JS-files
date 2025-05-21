// var n = 9;

// if (n % 2 === 1) {
//   //here we are using triple equal for checking value and type
//   console.log(n + " is odd number"); //bijor sonkha that's why remainder is 1
// } else {
//   console.log(n + " is even number"); //jor sonkha that's why remainder is
// }

//number % 2 === 1	ভাগশেষ 1	বিজোড় (Odd)
//number % 2 === 0	ভাগশেষ 0	জোড় (Even)

// var English = 99;
// var Bangla = 99;

// if (English > Bangla) {
//   console.log("You Got Highest ark In English");
// } else if (English < Bangla) {
//   console.log("You Got Highest Mark In Bangla");
// } else {
//   console.log("In both subject you got Highest Number");
// }

// var a = 5;
// var b = 10;

// if (a > b) {
//   console.log("A is greater than B");
// } else if (a < b) {
//   console.log("B is greater than A");
// } else {
//   console.log("They Both are Same");
// }

// var n = 1;

// if (n === 0) {
//   console.log(n + " is zero");
// } else if (n % 2 === 0) {
//   console.log(n + " is Even Number");
// } else {
//   console.log(n + " is Odd Number");
// }

var date = new Date()
var Today = date.getDay()

if (Today === 0) {
  console.log("Today is Sunday");
} else if (Today === 1) {
  console.log("Today is Monday");
} else if (Today === 2) {
  console.log("Today is Tuesday");
} else if (Today === 3) {
  console.log("Today is Wednesday");
} else if (Today === 4) {
  console.log("Today is Thursday");
} else if (Today === 5) {
  console.log("Today is Friday");
} else if (Today === 6) {
  console.log("Today is Saturday");
} else {
  console.log("Invalid Number please Ender from Number: 1-6");
}
