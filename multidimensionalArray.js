// Multi Dimensional Array

var arr = [
  [88, 55, 44, 33],
  [60, 76, 99, 86],
  [71, 75, 79, 80],
];

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log("Element " + i + ": " + arr[i][j]);
  }
}
