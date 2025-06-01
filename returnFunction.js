function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var result = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);

function person(name, email) {
  return {
    name: name,
    email: email,
  };
  // console.log("haha");
}
//we can resturn at last
var p1 = person("Sumaiya Dewan Mim", "sumaiyadewanmim@gmail.com");
console.log(p1);
