// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

// using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

//Advanced Arrays - using ES5 ES6

var array = [1, 2, 10, 16];
//num is 1, 2, 10, 16
//for forEach
//forEach just iterates over each element, only way it gets saved is if create a new array- doesn't have a return function (use map if possible to eliminate side effects
const double =[];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log (newArray);           //undefined
console.log('forEach', double);

//map filter reduce
// map always has to have a return function- (stores the result into another collection (map transforms the array- creates a new array)- pure function
const mapArray = array.map((num) => {
    return num * 2;
});
console.log('map', mapArray);

//if your just returning a single line clean it up using this syntax
const mapArray2 = array.map(num => num * 2);
console.log('map-singleline', mapArray2);

//filter- reads filter the array as you go one by one through the array evaluating the return statement (if returns false won't go into array and if true it will)
const filterArray = array.filter(num => {
    return num > 5;
})
console.log('filter array', filterArray); 

//or single line short form 
const filterArray2 = array.filter(num => num > 5);
console.log('fitlerArray2', filterArray2);

const filterArray3 = array.filter(num => num === 5);
console.log("fitlerArray3", filterArray3);

//reduce- powerful filter and mapping with reduce
//everytime you iterate accumulator is

const reduceArray = array.reduce((accumulator, num) =>  {
    return accumulator + num
}, 0)               //this is the accumultor the starting number
console.log('reduce', reduceArray);  //29

const reduceArray2 = array.reduce((accumulator, num) =>  {
    return accumulator + num
}, 5)               //this is the accumultor- the starting number
console.log('reduce', reduceArray2);        //34


//Excersizes
// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach(user => {
    let { username } = user;
    username = username + "!";
    newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
//user is arbitrary can use anything
const mapArray3 = array.map(user => {
    let { username } = user;
    return username +"?";
})
console.log(mapArray3);

const mapArray4 = array.map(x => {
    let { username } = x;
    return username +"?";
})
console.log(mapArray4);


//Filter the array to only include users who are on team: red
const filterArray4 = array.filter(user => {
    return user.team === "red"; 
})
console.log(filterArray4);

//Find out the total score of all users using reduce
const totalScore = array.reduce ((acc, user) => {
    return acc + user.score
}, 0);
console.log(totalScore);


// (1), what is the value of i?
//i= index of the array


// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);                //remove
	alert(num);                         //remove
	return num * 2;
})
//console.log(newArray);
//console.log(arrayNum);


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray7 = arrayNum.map((num, i) => {
    return num *2;
})
console.log(newArray7);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const mapArray5 = array.map(user => {               //map each element in the array
    user.items = user.items.map(item => {           //map item array
        return item + "!"                           //return each element in the item array with "!"
    });
    return user;
})
console.log(mapArray5);
