var obj = {
  x: 10,
  y: 20,
};

var obj2 = {
  x: 10,
  y: 20,
};

if (obj.a === obj2.a && obj.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

console.log(JSON.stringify(obj) === JSON.stringify(obj2));
