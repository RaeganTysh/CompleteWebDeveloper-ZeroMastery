//Pass by Value vs Pass by Reference
//Primitive types are immutable -can't modify it it is stored in memory. Unless it is removed - pass by value
//Object are pass by reference - array's are objects
//pass by value - copy the value and create that value somewhere 
var a = 5;      //stored in memory
var b = 6;
b++;

console.log(a);

//pass by reference - pro-save memory by referencing one location 
//con-by mistake someone can change the property of that reference type
let obj1 = {name: 'Yao', password: '123'};              //
let obj2 = obj1;            //obj2 and obj1 are referencing the same address

obj2.password = 'easypeasy';
console.log("obj1", obj1);              //password changed to easypeasy- referencing the same place
console.log("obj2", obj2);

//ex- arrays are objects - arrays are pass by reference
var c= [1,2,3,4,5];
var d = c;
d.push(1876287456);

console.log(d);
console.log(c);

//
var a= 5;
var b= a;

b++;

let obj3 = {a: 'a', b: 'b', c: 'c'};
//if you want to store the code on line 3 as a new location in memory
//cannot do let obj4 = obj3  //because it will reference the same code
let clone = Object.assign({}, obj3);
//another way to do it
let clone2 = {...obj3};               //new feature in JS language

obj3.c =5;
console.log(clone);         //code not modified    
console.log(obj3);          //code modified
console.log(clone2);

//what if you have an object inside and object
let obj3 = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and clone me'
    }
};
//shallow clone- only one object layer
let clone = Object.assign({}, obj3);
let clone2 = {...obj3};
//deep clone - use JSON
//careful- can have some performance complications (especially if it's really large deep object)
let superClone = JSON.parse(JSON.stringify(obj3));            //beyond scope of the course

//try these one at a time
obj3.c =5;
obj3.c.deep= 'hahaha';
console.log(clone);         //code not modified    
console.log(obj3);          //code modified- to the shallow or first object not the second- so it got overriden (only clone the first layer)
console.log(clone2);
console.log(superClone);        //show deep clone results


//Takeaway- use triple equals because type coercion can be very tricky!!
//Type Coercion - brief overview - all languages have type conversion
//when the operands are differnet types (number and string) one of them will be converted to one or the other
//converting a certain type to another type
//JS is dynmically typed so Type coercion is especially complicated

1 == '1'        //true- compare to values but coerce the values
1 === '1'       //false -compare the values but don't coerce the values (use clear code)

if (1) {                //wants a boolean so 1= true and 0=false
    console.log(5)
}
//true returns 5

if (0) {                //wants a boolean so 1= true and 0=false
    console.log(5)
}
//false returns undefined


//most likely won't encounter- Type coercion is very complicated
-0 === +0       //true
Object.is(-0, +0);   //false
NaN === NaN             //false
Object.is(NaN, NaN);        //true


//Evaluate these:
//#1
[2] === [2]  // false
//{} === {}   // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');

