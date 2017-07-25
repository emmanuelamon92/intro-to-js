// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A:undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:NaN


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A:Hello, how are you? Tim


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A:40


// 6.
// What is `math` set to?
math = high - "5";
// A:0


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:let age = today - born;


// 8.
// Adjust this code. Store some information in the following variables.
// A: let you
let yourName;
let instructorName;


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:let yourName = "Emmanuel";
// A:let instructorName = "Calvin"


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 5;
let myString = "Sup";
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:no value causes this to be undefined.


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true


// 12.
let y = (false == "");
// A. true


// 13.
let z = (0 == "");
// A.false


// 14.
let a = (null == null);
// A.


// 25.
let b = (undefined == undefined);
// A. false


// 16.
let c = (undefined == null);
// A.true


// 17.
let d = (null == false);
// A. true


// 18.
let e = (NaN == null);
// A. true


// 19.
let f = (NaN == NaN);
// A. false


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:if(thirsty)
let thirsty = true;

if(thirsty){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
