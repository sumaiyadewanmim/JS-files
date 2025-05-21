//using logical OR operator if i don't know the name or the thing what will come than i can use empty string

var name = "";

var fullname = name || "Sumaiya Dewan Mim";
console.log(fullname);

var newName = "Mariya Dewan Aesha";

var NewOne = newName || "Fariya Dewan";
console.log(NewOne);

var littleSister = true;

littleSister && console.log("Fariya Dewan Lamha");
