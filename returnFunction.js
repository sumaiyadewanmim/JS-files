function greet(msg) {
  function greetings(name) {
    return msg + " , " + name + "!";
  }
  return greetings;
}

var gm = greet("Good Night");
var gn = greet("Have a Nice Dream");

var msg = gm("Sumaiya Dewan Mim");

console.log(gn("Mariya"));
console.log(msg);

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var base10 = base(10);
console.log(base10(2));
