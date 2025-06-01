function test(a, b, c) {
  //Not array not object it's an array like data structure
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(10, 20, 30);

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
