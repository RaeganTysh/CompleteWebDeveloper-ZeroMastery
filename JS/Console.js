/* Copy and paste into the console*/

/*console program 1-  */
var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("the sum is" + sum);


/*console program 2- conditional statements*/

var user = "Billy";
if (user === "Billy") {
    alert("hi Billy");
} else {
    alert("hmmm I don\'t know you");
};

/*console program 3 - conditional statements*/

var user = "Michelle"
if (user === "Billy") {
    alert("hi Billy");
} else if (user === "Suzy") {
    alert("hi Suzy");
} else {
    alert("I don\'t know you" );
};

/*console program 4 - ternary operators  || OR */

var user = "Billy"
if (user === "Billy" || user === "Anne") {
    alert("hi Billy or Anne");
};

/*console program 5 - ternary operators  && AND */

var firstName = "Billy"
var lastName ="Smith"
if (firstName === "Billy" && lastName === "Smith") {
    alert("Hi Billy Smith");
};

/*console program 6 - ternary operators  ! NOT */
var user = "Joe";
if(!(user === "Billy" )) {
    alert("Hi Billy");
};

var user = "Billy";
if(!(user === "Billy" )) {
    alert("Hi Billy");
};

/* Keyless Car */
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}