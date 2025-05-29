//Intert and Remove Element Array

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
//insert 9 to index 3

// arr[3] = 9;
// arr.push(9)
// arr.unshift(9);

// arr[3] = undefined;
// arr.splice(3, 0, 9, 10);
// arr.pop();
// arr.shift();

arr.splice(3, 1);
console.log(arr);

// 1. Remove Elements
// js
// Copy
// Edit
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // Remove 2 elements starting from index 1
// console.log(arr); // [1, 4, 5]
// 2. Add Elements
// js
// Copy
// Edit
// let arr = [1, 4, 5];
// arr.splice(1, 0, 2, 3); // Add 2, 3 at index 1 without deleting
// console.log(arr); // [1, 2, 3, 4, 5]
// 3. Replace Elements
// js
// Copy
// Edit
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 99, 100); // Remove 2 elements from index 2, add 99, 100
// console.log(arr); // [1, 2, 99, 100, 5]
// 4. Remove All After Certain Index
// js
// Copy
// Edit
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2); // Remove everything from index 2 onward
// console.log(arr); // [10, 20]
