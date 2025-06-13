// // 107 & 108 Object Literal in JS

var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am a Rectangle");
    this.printProperties();
  },
  printProperties: function () {
    console.log("My Width is " + this.width);
    console.log("My height is " + this.height);
  },
};
rect.draw();

// rect.width = 200;
// rect.draw();

var another = {
  width: 44,
  height: 50,
  print: rect.printProperties,
};
console.log(another.print);
another.print();

// i need to see 110 -114 again *******

// var rect2 = new Rect(4, 5);
// console.log(rect2);

//115 call , Apply ,Bind

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b);
}

//we can also know how to new keyword work by knowing call method

// myFunc.call({ a: 40, b: 25 }, 10, 5);
// myFunc.apply({ a: 400, b: 250 }, [10, 5]);

var testBind = myFunc.bind({ a: 7, b: 3 });
testBind(4, 6);

//116 Pass by value vs pass by reference
//call by value vs call by reference

var n = 10;
function change(n) {
  n = n + 200;
  console.log(n);
}
change(n);
console.log(n);//it will not change call by value

var obj = {
  a: 10,
  b: 20,
};

function changeMe(obj) {
  obj.a = obj.a + 100;
  obj.b = obj.b + 200;
  console.log(obj);
}
changeMe(obj);
console.log(obj);//it will change pass by reference
