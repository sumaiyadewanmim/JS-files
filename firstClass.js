// First Class Function
function add(a, b) {
  return a + b;
}
//1.A Function can be stored in a variable
var sum = add;
console.log(sum(3, 6));

//2.A Function can be store in an Array

var arr = [];
arr.push(sum);
console.log(arr);
console.log(arr[0](9, 27));

//3.A Function can be Stored in an Object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(6,5))

//4.We can create function as we need 
setTimeout(function(){
  console.log('I have Created...')
} ,100)

