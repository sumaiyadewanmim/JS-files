//And Operator
// A && B
// true && true = true
//true && false = false
//false && true = false
//false && false = false

//Or Operator
//A||b
// true || true = true
//false||true = true
//true||false =true
//false  || false = false

var a = 10;
var b = 20;
var c = 50;
var d = 40;

if (a < b && c > d) {
  console.log("B is greater and D is greater");
} else {
  console.log("At least one condition is false");
}

if (a > b || c < d) {
  console.log("A is greater and B is greater");
} else {
  console.log("At least one condition is false");
}

//Or ! it will change false to true and true to false , but if we use
//!! double not sign it will show to correct answer and of we use !!! again it will change value
var check = !!!(a < b);
console.log(check);
