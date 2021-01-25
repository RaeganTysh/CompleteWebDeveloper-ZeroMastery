//ECMAScript === Javascript
//BABEL reads the JS file and transform into "form" in which browsers can read
//var is old way and don't need to use it anymore always use let or const

//let and const (new ways of declaring variables)
//let vs var
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);

}
//wizardLevel  //false because of let if both ar var it would be true
console.log('outside', wizardLevel);
//anytime let is wrapped atound curly bracket it creates a new scope


//with variable you were only allowed to create a scope inside a function
const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
    var wizardLevel = true;
    console.log('inside', wizardLevel);  //true

}
//wizardLevel  //true because of let if both ar var it would be true
console.log('outside', wizardLevel);  //true
//using var-no new scope was created in the curly brackets because it isn't a function

//const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    //console.log('inside', wizardLevel);

}
experience = 80;         //you can reassign the let variable - if variable might change use let (wizardlevel, user, password);
experience;
player = "sally";       //cannot reassign the const variable- if you have anything that isn't going to change it should be a const
player;

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
obj= 5;         //will get an error because it's a constant
obj.wizardlevel = "true";           //if you change a property
obj;
//yoiu can change the properties of the object you cna't reassign the obj because it's a const

//destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//a lot of code to access these properties

const {player, experience} = obj;
let {wizardLevel}=  obj;
//exact same thing- cleaner code-  select the properties 


//new ways of declaring object properties (dynamic property values)- usueful if yo need to calcualte something for property value
const names = 'john snow';

const obj = {
    [names]: 'hello',
    [1 + 2]: 'hihi'

}
obj;

//another ex
const a = "Simon";
const b = true;
const c = {};
//old way- sometime syou want the property to match the value
const obj = {
  a:a,
  b:b,
  c:c  
}
a;
obj.a;

//in new JS- if property and value are the same - can remove the declaration with property and value- will be important in React section
const obj = {
    a,
    b,
    c 
  }
  c;
  obj.c;

  //Template Strings
  const fname = "Sally";
  const age = 34;
  const pet = "horse";


  //really tedious and annoying
  //const greeting = "Hello" + fname + "you seem to be doing" + greeting + "!/'"
  //new way use backticks (means templatestrings- use double quotes singel quotes) dynamic dollar sign curly brakcets and then value/expression 
  const greetingBest = `Hello ${fname} you seem to be ${age-10}. What a lovely ${pet} you have`;

  //default arguments- nothing has changed 
  
  function greet(fname = '', age=30, pet='cat') {
    return greetingBest = `Hello ${fname} you seem to be ${age-10}. What a lovely ${pet} you have`;

  }
  greet();
  greet("John", 50, "monkey");

  //Symbol- completely unique type - used mostly as an unique identifier for object properties - rare
  //example-- thousands of object properties to collide and see the same ones (bugs) 

  let sym1 = Symbol();
  let sym2 = Symbol('foo');
  let sym3 = Symbol('foo');

  sym1;
  sym2;
  sym3;
  sym2 === sym3;            //false

  //Arrow functions
  
  function add(a, b) {
      return a + b;
  }

  //short hand form for writing a function
  //if you want to do a single return - put on one line
  const add2 = (a, b) => a + b;

add(4,2);
add2(4,2);

//Excersizes change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';
//new JS
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;
//new JS
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastname, age, eyeColor} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//new JS
const a = 'test';
const b = true;
const c = 789;

var okObj = {a, b, c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//new JS
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//new JS
const isValidAge =(age=10) => age; 

// Symbol
// Create a symbol: "This is my first Symbol"
const sym =Symbol('this is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//new JS
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }

}
