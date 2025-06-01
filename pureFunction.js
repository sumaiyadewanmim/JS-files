// What is pure function ?
//Always gives the same output for the same input
//Does not modify or depend on anything outside itself (no side effects)

function sqr(n) {
  return n * n;
}

console.log(sqr(10));
console.log(sqr(20));