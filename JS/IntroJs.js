/*JS basics*/
4 + 3;
 
if (4+3 === 7) {
    alert("You\'re smart");
}

if (4+3 === 7) {
    console.log("Hello");
}

function sayHello () {
    console.log("hello");
}
sayHello();


/*annonymous function*/
var sayBye = function() {
    console.log("Bye");
}
sayBye();

function sing() {
    console.log ("AHHHHHHHH")
    console.log ("Teeeeeeee")
}
sing();

/*the power of arguments- allow us not to repeat our self and be more etensabile*/
function sing(song) {
    console.log (song);  
}
sing("lad dee dah");
sing("helllllooooooo");
sing("backstreets back alright");

/*need to use a return function if not will get undefined- soon as you return function exits!*/
/*function multiply(a, b) {
    console.log(a, b);
    return a * b;
}
multiply(5, 10);
console.log(multiply(5, 10));
alert(multiply(3,4));

function multiply2(a, b) {
    if (a > 10 || b > 10){
        return "that's too hard";
    } else {
        return a*b;
    }
}    
multiply2(5, 10);
console.log(multiply2(5, 10));
console.log(multiply2(5, 12));*/

/*parameters - a, b - 2 parameters*/
/*arguments - everything in brackets*/

/* arrays- numbers, strings, boolean, functions, undefined (not advised to put mixed data types into the same array- performance issues) */
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
/* array in an array*/ 
var list1 = [["tiger", "cat", "bear", "bird"]];
console.log(list1[0][2]); 
/* js has predefined methods (functions)- shift/pop/push/concat/sort*/

/*Objects (type)- property/value*/
var user= {
    name: "john",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AHHHH");
    }

};
console.log(user.name);
/*add progperty and value to object */
user.favoriteFood = "spinach";
console.log(user);
console.log(user.spells);
console.log(user.spells[1]);
/* a function inside and object is called a method (shout is a method of user) */
console.log(user.shout());
/*console is an object property  log is the value*/ 

/* array of objects */

var list3 = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]; 
console.log(list3);
console.log(list3[0].password);

/*Null- there is nothing in this object */

//Excersize 1

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

// Excersize 2

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

// Excersize 3

// Make a Calculator! using prompt(), and variables, make a program that does the following:
var firstNumber = prompt("Please provide the first number"); 
var secondNumber = prompt("Please provide the second number"); 
alert(Number(firstNumber) + Number(secondNumber));


//# Excersize 4

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
