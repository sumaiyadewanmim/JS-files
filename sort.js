var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];

var arr = [4, 8, 1, 6, 7, 4, 3, 1, 7, 0, -2, -8, 9, -3, 6];
// arr.sort();
// console.log(arr);

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

console.log(persons);
