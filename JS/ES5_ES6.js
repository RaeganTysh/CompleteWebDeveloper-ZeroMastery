//ECMAScript === Javascript
//BABEL reads the JS file and transform into "form" in which browsers
//var is old way and don't need to use it anymore always use let

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