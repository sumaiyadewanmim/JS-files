//Reverse Array

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.reverse(); //Built-in .reverse()
console.log(arr);

var arr2 = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr2.length / 2; i++) {
  temp = arr2[i];
  arr2[i] = arr2[arr2.length - 1 - i]; //Manual reverse using for loop
  arr2[arr2.length - 1 - i] = temp;
}
console.log(arr2);
