
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


