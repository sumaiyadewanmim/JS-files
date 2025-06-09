//088 Context and Fnction in JavaScript

abc();
function abc() {
  console.log("I am doing my JS practices Nowadays");
}

abc();

//Creational Phase
//abc = ref

//Executional Phase

// 090 Function Declaration vs Expression in Javascript

abc();
function abc() {
  console.log("I am doing my JS practices Nowadays");
}

abc();
//newAbc

var newAbc = function () {
  console.log("I am New ABC Function");
};
newAbc();

//Creational Phase
//abc = ref
//newAbc = undefined

//Executional Phase
