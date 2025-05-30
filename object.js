//Primitive Data Types in JavaScript (Short Note)
//Primitive types are basic data types holding single immutable values.

// Types:

// String: Text, let name = "Queen";

// Number: Numeric values, let age = 22;

// BigInt: Very large integers, let bigNum = 9007199254740991n;

// Boolean: true or false , let isReady = true;

// Undefined: Variable declared but no value assigned let x;
//console.log(x); // undefined

// Null: Represents empty or no value ,let y = null;

// Symbol: Unique identifiers,let id = Symbol("id");

//__________________________________________________________________________

// Non-Primitive Data Types (Short Note)
// Store complex data (collections or objects).

// Examples: Object, Array, Function.

// Stored as reference values (memory address).

// Changing one reference affects all that point to it.

//JS Object : Objects in JavaScript

//Student : 1
//math : 33
//chemistry:70
//physics:75
//higher math : 38
//[33,70,75,38]

//Literal and Contructor Object

//Literal Object

// var obj = {};
// obj.x = 10;
// console.log(obj);

// var point = {
//   x: 10,
//   y: 20,
// };

// // point.y = 40;
// point.z = 30;
// console.log(point);

// //object constructor

// var obj = Object();
// obj.a = 10;
// console.log(obj);

// var obj2 = new Object();
// obj2.b = 20;
// console.log(obj2);

var point = {
  x: 10,
  y: 20,
  z: 15,
};

// console.log(point.x); //Dot Notation
// console.log(point.x + point.y);

point.x = 45;
point.a = 50;
console.log(point); //Dot Notation

point["y"] = 100; //Array Notation
var prop = "z";
point[prop] = 55;
delete point.a;
console.log(point);

// console.log(point["z"]); //Array Notation
// console.log(point["y"]);

// var show = "x";
// console.log(point[show]);
