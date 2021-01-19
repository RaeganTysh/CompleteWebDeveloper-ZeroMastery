
//understanding scope- run in console
//Scope
function aa() {
    console.log("test)")
}
window.aa()
//open up window in console and find function 
window

function bb() {
    var a = "hello";
    console.log(a);
}
bb();

//functions have access to any variable in the root scope (window object)
var b = "Can I access this";

function bb() {
    var a= "hihi";
    console.log(1, b);

}
//before running the function
console.log(b);
//after running the function
bb();

//understanding scope- run in console
//Root Scope (window object)
var fun =5;

 function funFunction () {
     //child scope
     var fun ="hello";
     console.log(1, fun);
 }

 function funerFunction () {
    //child scope
    var fun ="bye";
    console.log(2, fun);
}

function funnestFunction () {
    //child scope
    fun ="ahhhhhhh";
    console.log(3, fun);
}

console.log("window", fun);
funFunction ();
funerFunction ();
funnestFunction ();
//modified fun in line 21 to ahhhh
console.log(fun);

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
q1()  // alert 3

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
    a = 5;
}


function q22() {
    alert(a);
}
q2();  // undefined
q22();  //alert 5


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
q3 ();   //undefined
q32 ();  //alert hello


//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4 ();      //alert test

//#5
//with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);   


