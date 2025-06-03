var arr = [1, 2, 3, 4, 5];

// var sum = 0;
// arr.forEach(function (value, index, arr) {
//   // console.log(value, index, arr);

//   sum += value;
// });
// console.log(sum);

// function forEach(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// forEach(arr);

function forEach(arr, cb) {
for (var i = 0; i < arr.length; i++) {
  cb(arr[i], i, arr);
}
}
var sum = 0;
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
  sum += value;
});

console.log(sum);

arr.forEach(function(value, index, array) {
  array[index] = value + 5;
});

console.log(arr);