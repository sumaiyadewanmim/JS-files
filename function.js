// What is Function
// Function : 1. Input ,2.Process , 3.Output

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth() + 1; // getMonth() returns 0-11
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// const formatted = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

// console.log(formatted);

//Defining the Funtion*****

function functionName() {
  console.log("I'm a Function");
}

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

function sub() {
  var a = 40;
  var b = 30;
  console.log(a - b);
}

functionName();
functionName();
for (var i = 0; i < 10; i++) {
  functionName();
}

add();
sub();
