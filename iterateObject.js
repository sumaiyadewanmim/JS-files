var obj = {
  x: 40,
  y: 60,
  z: 75,
};
// console.log("x" in obj);
// console.log("p" in obj);

for (var j in obj) {
  console.log(j);
  console.log(j + " : " + obj[j]);
}
