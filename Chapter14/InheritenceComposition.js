function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

var canWalk = {
  walk: function () {
    console.log("Walking....");
  },
};
var canSleep = {
  sleep: function () {
    console.log("Sleeping....");
  },
};

var canEat = {
  eat: function () {
    console.log("Eating....");
  },
};
var canSwim = {
  swim: function () {
    console.log("Swimming....");
  },
};

// var person = Object.assign({}, canWalk, canEat);
// person.name = "Sumaiya";

function person(name) {
  this.name = name;
}
mixin(person.prototype, canWalk, canEat, canSleep);
var person = new person("Sumaiya Dewan Mim");
console.log(person);

function fish(name) {
  this.name = name;
}

mixin(fish.prototype, canEat, canSwim);
var Goldfish = new fish("Bla , bla , bla");
console.log(Goldfish);
