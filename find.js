var arr = [7, 4, 8, 6, 9, 10, 3];
var result = arr.find(function (value) {
  return value === 9;
});
console.log(result);

var result2 = arr.findIndex(function (value) {
  return value === 9;
});
console.log(result2);

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      // return arr[i];
      return i;
    }
  }
}
var result = myFind(arr, function (value) {
  return value === 9;
});

console.log(result);
