// 91 Scope in Javascript

{
  var x = 55;
  function test() {
    //var x = 45
    console.log(x);
  }
  test();
}

// 92 Nested Scope in Javascript
{
  var x = 55;
  function test() {
    //var x = 45
    //console.log(x)

    function nested() {
      //var y = 65
      console.log(x);
    }
    //console.log(y)
    // nested();
  }
  test();
}

// 94 Scope chain in JavaScript

var a = 11;

function A() {
  var b = 12;
  function B() {
    var c = 23;

    console.log(c);
  }
  function C() {
    var d = 56;
    console.log(d);
  }
  console.log(b);
  D();
  B();
  C();
}
function D(n) {
  return n + a;
}

// A  > a , b, B() C() ,D(),
// B  > c , b, a,B(),C(),D()
// C  > d , b, a ,B(),C(),D()
// D  > a , n, A()
