// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
/*{
	username: "andrei",
	password: "supersecret"
}*/

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
//copy into console
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
newsfeed;

//advanced object concepts

//reference type, contenxt, instatiation

//reference type  (examples)
//primitive type is defined Javascriptby programmer
//objects are referecne types (non primitive)- created by the programmer
[] === [];			//false- arrays are an object 
[1] === [1]		//false
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};
object1 === object2 			//true- object2 references object1
object1 === object3			//false- object3 doesn't reference object1 
object1.value = 15;			
object2.value				//15
object3.value				//10

//context vs scope 
//scope is created with curly brackets- a can only be accessed within the function b
function b() {
	let a=4;

}

//context "this" just referes to the object it is inside of
console.log(a);		//return a ReferenceError because it is outside of the scope

console.log(this);			//window object
console.log(this === window);			//true
this.alert("hello");				//anything left of the . is the same as accessing the window alert("hello");			
alert("hello");

function a() {
	console.log(this);	
}
a();				//window object
window.a();			//left of the dot is the window
//create a new value for this
const object4 = {
	a: function() {
		console.log(this);
	}
}
object4.a();			//important in instatiation

//instatiation - when you make a copy of an object and resuse the code
//everytime I create a player constructor runs and populates properties and values
class Player {
	constructor(name, type) {
		console.log('Player', this);					//understanding code- shows all the players
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}
//anytime you extend something you have to call super (acess the Plaayr class) and pass the properties
class Wizard extends Player {
	constructor(name, type) {
		super (name, type)
		console.log('Wizard', this);
	}
	play() {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}

//instead of constantly creating Players and Wizards like above you can...
//new keyward - creating a new wizard with 2 parameters => wizard class with 2 constructors na,e and type => - sees super and takes us to Player Class 
const wizard1 = new Wizard('Shelly', 'Healer');											
const wizard2 = new Wizard('Shaun', 'Dark Magic');

wizard1.introduce();
wizard1.play();

//The old way- Classical Inheritance - shouldn't use- might encounter it
/*var Player = function(name, type) {
	this.name = name;
	this.type = type;
}

Player.prototype.introduce = function() {
	console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}

var wizard1 = new Wizard('Shelly', 'Healer');											
var wizard2 = new Wizard('Shaun', 'Dark Magic');

wizard1.play = function() {
	console.log(`WEEEEE I'm a ${this.type}`);
}

wizard2.play = function() {
	console.log(`WEEEEE I'm a ${this.type}`);
}*/



