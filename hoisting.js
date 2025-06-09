//089 Hoisting in Javascript

var a = 100;
//newPrint(a);

print(10);

var newPrint = print;
newPrint(45);

function print(a) {
  console.log(a);
}

print(a);

//Creational phase
// var a = Undefined
//newPrint = undefined
//print = ref

//Executional Phase
//  var a = 100
//newPrint = ref
