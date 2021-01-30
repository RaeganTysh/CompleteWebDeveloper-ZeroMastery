var todos = [
    "clean room",
    "brush teeth",
    "excersize",
    "study javascript",
    "eat healthy"
];

//for loop

for (var i=0; i < todos.length; i++) {
    console.log(todos[i] +"!")
}

for (var i=0; i < todos.length; i++) {
    todos[i]=todos[i] +"!";
}
console.log(todos);
//should have an empty array- pop didn't work-why??
var todosLength = todos.Length;
for (var i=0; i < todosLength; i++) {
    todos.pop();
}
console.log(todos);//

//while loop- checks condition first- then loops
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne ++;
}

var counterTwo = 10;
while (counterTwo > 0) {
    console.log(counterTwo);
    counterTwo --;
}

//do while loop -does loop - then check condition 
var counterThree = 10
do {    
    console.log(counterThree);
    counterThree--;
}while (counterThree > 0);

//Example  while- do while difference- while doesn't run, do-while runs
var counterFour = 10;
while (counterFour > 10) {
    console.log("while loop", counterFour);
    counterFour --;
}

//do while loop -does loop - then check condition 
var counterFive = 10
do {    
    console.log("do while", counterFive);
    counterFive--;
}while (counterFive > 10);

//forEach loop- takes and array asks fo an argument

todos.forEach(function(i) {
    console.log(i);

})

todos.forEach(function(todos) {
    console.log(todos);

})

todos.forEach(function(todo, i) {
    console.log(todo, i);

})


//Advanced Loops

const basket = ['apples', 'oranges', 'grapes']
//1st way
 for (let i=0; i < basket.length; i++ ){
     console.log(basket[i]);
 }
//2nd way
basket.forEach(item =>{
    console.log(item);
});
//while and do while

//for of lets us iterate over the iterables
//iterating over this array- go one by one and look at the item -arrays, strings
//iterate over the array
for(item of basket) {
    console.log(item);
}

//iterate over the string
for(item of 'basket') {
    console.log(item);
}

//for in works with objects (lets us loop over and see the object properties)
//we are not iterating (arrays and strings) we are enumerating (properties in objects are enumerable)
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

for (item in detailedBasket) {
    console.log(item);
}

//for fun - what ahappens with for of using an object
for(item of detailedBasket) {
    console.log(item);
} //detailedBasket is not iterable ---it is enumerable

//for fun - what happens with for in loop using an array
for (item in basket) {
    console.log(item);
}           //it works why because...enumerating over the properties 0, 1, 2 below

basket = {
    0: 'apples',
    1: 'oranges',
    3: 'grapes' 
}

//you can go along time before having to use 'for in' (Object.keys, values, entries, foreach or for) 
//good to know the differences 



// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i=0; i < arr.length; i++){
        if (highest < arr[i]){
            highest = arr[i];
        }
    }
    return highest;
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

function biggestNumberInArray2(arr) {
    let highest=0;
    arr.forEach(item => {
        if (highest < item);{
            highest = item;
    }
    })
    return highest;
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

function biggestNumberInArray3(arr) {
    let highest=0;
    for (item of arr) {
        if (highest < item);{
            highest = item;
        }
    }
    return highest;
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);


}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket) {
        if (item === lookingFor) {
            return `${lookingFor} is in your basket`
        }
    }
    return 'that item is not in your basket';
}
checkBasket();
checkBasket(amazonBasket, 'glasses');
checkBasket(amazonBasket, 'runners');
checkBasket(amazonBasket, 'books');
checkBasket(amazonBasket, 'floss');



