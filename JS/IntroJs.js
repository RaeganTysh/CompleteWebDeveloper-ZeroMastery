/*4 + 3;
 
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
*/

/*annonymous function*/
/*var sayBye = function() {
    console.log("Bye");
}
sayBye();

function sing() {
    console.log ("AHHHHHHHH")
    console.log ("Teeeeeeee")
}
sing();

/*the power of arguments- allow us not to repeat our self and be more etensabile*/
/*function sing(song) {
    console.log (song);  
}
sing("lad dee dah");
sing("helllllooooooo");
sing("backstreets back alright");*/

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
console.log(user.shout());


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


