var str = "Something";
var str2 = String("Something"); //String Constructor
console.log(str, str2);

//suppose we have
var n = 10;
var str3 = n;
console.log(str3); //output will be 10 as a number but we want it as string

//solution 1

var m = 10;
var str4 = m + ""; //just changed n to m for print
console.log(str4);

//solution 2

var x = 10;
var str5 = n.toString(); //just changed n to x
console.log(str5);

//solution 3
var y = 10;
var str6 = String(n); //String Constructor
console.log(str6);

//Escape Notation

var name = "Her name's \"Sumaiya\".\nShe's an Engineer.";
console.log(name);

//String Compasiron
var a = "abc";
var b = "bcd";

console.log(a < b);

// Explanation:
// JavaScript compares strings using the lexicographic (dictionary-like) order.
// It compares character by character using Unicode values.
// Unicode order: 'A' to 'Z' (65 to 90), 'a' to 'z' (97 to 122)
// So, 'A' < 'a' (capital letters come before small letters)
// That's why "abc" < "bcd" returns true.

//ASCII – American Standard Code for Information Interchange. The old-school
//system (subset of Unicode) that maps characters to numbers.

var c = "Sumaiya";
var d = "Rumaiya";
console.log(c > d); //Sumaiya is always elder Haha than her Sister

console.log("001" == 1);
//  Explanation:
// In JavaScript, the loose equality operator (==) performs type coercion.
// Here, '001' is a string, and 1 is a number.
// During comparison, '001' is converted to a number → 1
// So the comparison becomes: 1 == 1 →  true

//  Note: In concatenation, numbers are converted to strings.
// Example: 1 + '1' → '11'
// But in comparison using ==, strings are converted to numbers if the other value is a number.

//__________________________

var o = "I Love JS"; // Declare a string variable o
var p = "Now I'm Learning it."; // Declare another string variable p

// concat() joins strings together — here, you're joining o + "" + p
// "" adds no extra space, so q becomes: "I Love JSNow I'm Learning it."
var q = o.concat("", p);

// substring(9) extracts a portion of the string starting from index 9
// In "I Love JSNow I'm Learning it.", index 9 starts at the character 'N'
var r = q.substring(9);

// Output: "Now I'm Learning it."
console.log(r);

console.log(r.charAt(9)); //to see any index Character
console.log(r.startsWith("N")); //true

console.log(r.toUpperCase());
console.log(r.toLowerCase());

console.log(r.split(" "));
