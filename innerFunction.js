//Inner Function or Nested Function
function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}
something("Good Morning ! ", "Sumaiya Dewan Mim");

function something2(dua, name) {
  function getfirstName() {
    if (name) {
      return name.split(" ")[0];
    }
  }
  var messege = dua + " " + getfirstName();
  console.log(messege);
}
something2("Hasbunallahu Wa Niya'mal Wakeel ! ", "Sumaiya Dewan Mim");
