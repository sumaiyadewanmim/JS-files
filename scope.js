var a = "abc";
// if (true){
//   if(true){
//     var b = 'I am B'   // If we used 'let' or 'const' instead of
//  'var', 'b' would NOT be accessible outside the block

//   }
// }
// console.log(b)

function x() {
  var a = 20;
  function y() {
    //   a = 10;
    console.log(a);
  }

  y();
  console.log(a);
}

x();

function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + " is divisible by both 3 and 5");
  } else {
    console.log("not a valid number");
  }
}
test(10);
test(15);
