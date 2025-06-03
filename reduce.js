var arr = [2, 3, 6, 7, 8, 4, 8, 66, 33, 2211];

// var sum = arr.reduce(function(prev,curr){
//   return prev  + curr
// },100)

// var max = arr.reduce(function(prev,curr){
//   return Math.max(prev,curr)
// },0)

// console.log(sum);
// console.log(max);

function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
var max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
var min = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  0
);

console.log(sum, max, min);
