//function declaration
function newFunction () {

}
//function expression- end with semi colon- annonymous(no name) - more likely
var newFunction =function () {

};
//function expression- end with semi colon- named
var newFunction =function namedFunction() {

};

//expression- denotes a value
1+3;
var a = 2;
return true;

//calling or invoking a function
alert()
newFunction(param1, param2);

//assign a variable
var a =true;

//function and accessing it
function thisIsAFunction(){

}
thisIsaFunction();

//Method and accessing it
var object = {
    thisIsAMethod: function() {

    }
}
object.thisIsAMethod();

//Advanced JS Fuctions  --
function first() {
    var greet ="hi";
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first ();
newFunc();            //why do we need () here??

//convert to arrow function (ES5_ES6)- scope cleans slate everytime (minimize bugs in program)
const first = () => {
    const greet ="hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first ();
newFunc ();

//Closures
//funciton runs, function executes. I'ts never going to execute again but it's going to remember that there are references to those variables 
//so...child scope always has access to the parent scope variables
//children can access parent but parents can't access children! Ex name= Bobby 

const first = () => {
    const greet ="hi";
    const second = () => {
        const name ="bobby"; //ex
        alert(greet);
    }
    return second;
}

const newFunc = first ();
newFunc ();

//Currying - (arrow = function) converting a funciton that multiple arguments to a function that takes them one at a time
//why?- more extensible
const multiply = (a, b) => a * b;
//this is a function inside of a function
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);  // const curriedMultiply = (3) => (b) => 3 * b; //so it will return the second function
curriedMultiply(3) (4);     //to make it work need to give values to both functions
const multiplyBy5 = curriedMultiply(5);         //more extensible  //multiply any parameter givne by 5  (a=5, b=second parameter)
multiplyBy5(5);
multiplyBy5(10);
multiplyBy5(11);

//Compose - putting 2 functions together to form a 3rd functions
const compose = (f, g) => (a) => f(g(a));
//f and g are functions
//example
const sum =(num) => num + 1
//ex f and g are sum and a =5
compose(sum, sum)(5);
//break it down
//const compose = (f, g) => (a) => sum(sum(5));
//const compose = (f, g) => (a) => sum(6));
//const compose = (f, g) => (a) => sum(6));
//7

////avoid/minimise side effects (console.log and undefined values) 
//strive for functional purity - clean functions that return something (Deterministic- always returns the same value- avoid bugs)
var a =1;
function b() {
    a=2             //this is a side effect it's effecting a global variable instead of staying in scope

}





