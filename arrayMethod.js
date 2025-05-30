// var arr = [4, 5, 9, 6];
// // var arr2 = [7, 8, 9, 10];

// // console.log(arr.join(" "));
// // console.log(arr.join(" , "));
// // console.log(arr.join(" | "));

// // arr.fill(0);

// var arr3 = arr.concat(arr2);
// console.log(arr3);

// // console.log(Array.isArray(arr))

// var arr2 = Array.from(arr);
// console.log(arr2);

// var a = [1, 2];
// var b = a;

// //it will change the value of a so that's why we should use Array.from to clone any array

// b[0] = 5;
// console.log(a);

// var c = [1, 2];
// var d = Array.from(c);

// d[0] = 5;
// console.log(c);
// console.log(d);

// //if you need object array to know values and keys you can use keys,values,entries methods
var point = {
  x: 10,
  y: 20,
  z: 15,
};

// console.log(Object.keys(point));
// console.log(Object.values(point));
// console.log(Object.entries(point));

var point2 = Object.assign({}, point);

point2.x = 100;
console.log(point);
console.log(point2);
