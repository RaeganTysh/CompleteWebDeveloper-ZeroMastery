# Excersize 1

5 + "34" // "534"
5 - "4" // 1
10 % 5 // 0
5 % 10 // 5
"Java" + "Script" // "JavaScript"
" " + " " //  "  "
" " + 0 //  " 0"
true + true // 2
true + false // 1
false + true //  1
false - true //  -1
3 - 4 //  -1
"Bob" - "bill" // NAN (not a number)


5 >= 1 // true
0 === 1 //  false
4 <= 1 //  false
1 != 1 //  false
"A" > "B" //  false
"B" < "C" //  true
"a" > "A" //  true
"b" < "A" //  false
true === false //  false
true != true // false


// Make the string: "HI There! It's sunny out" by using the + sign.
"Hi There! " + "It\'s \"sunny\" out"

# Excersize 2

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Andrei";
var lastName = "Neagoie";

// create a variable that holds the answer // of "firstName" + " " + "LastName"
var fullName = firstName + " " + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
b + a // 23

// What is c equal to?
var c; // undefined

# Excersize 3

// Make a Calculator! using prompt(), and variables, make a program that does the following:
var firstNumber = prompt("Please provide the first number"); 
var secondNumber = prompt("Please provide the second number"); 
alert(Number(firstNumber) + Number(secondNumber));


# Excersize 4

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


// using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}