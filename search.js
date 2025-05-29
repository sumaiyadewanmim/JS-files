//Search Array

var arr = [4, 5, 2, 8, 77, 76];
var find = 77;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("Data Found at Index " + i);
    isFound = true; 
    break;
  }
}

if (!isFound) {
  console.log("Data Not Found");
}

