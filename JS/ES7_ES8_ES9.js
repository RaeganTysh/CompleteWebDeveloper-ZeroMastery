//ES7 (ES2016)
//ES7 2 additions to the language
//includes on strings and arrays
"Helllllllo". includes('o');        //true
const pets =[ 'cat ', 'dog', 'bat' ];
pets.includes('dog');               //true
pets.includes ('bird');         //false

//exponential operator
const square = (x) => x**2;
square(2);          //4
square(5);      //25

const cube = (y) => y**3;
cube(3);            //27
cube(4);        //64

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");  //false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah', 'BoyJohn', 'Johnnyboy', 'Babyjohn'];
dragons.filter(fname => fname.includes('John'));
dragons.filter(fname => fname.includes('John') || fname.includes('john'));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;
power100(2);

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power100(10000);
//a  number that exciids the upper or lower limit of the floating point number +/-1.79769....E308


//ES8- more important ones string methods'padstart/padend
'turtle'.padStart(10);              //10 spaces before/after word 
'turtle'.padEnd(10);  

//trailing functions parameter lists and calls
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1, 2, 3, 4,);
//why is this useful at all- large parameters line by line syntactic end comma is valid no errors

Object.values
Object.entries
//Object.keys (old way)

//not an array - can't do map, filter, reduce
//encounter objects you don't like or work with but need to iterate over 
let obj = { 
    username0: 'Santa',
    username1: 'Ruduolf',
    username2: 'Mr. Grinch',

}
//old way iterate over object like an array for each key 'propery" grab the index "value"
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

//object.values makes it easier
Object.values(obj).forEach(value => {
    console.log(value);
})

//Object.entries - array of properies(key) and values- converts to an array
Object.entries(obj).forEach(value => {
    console.log(value);
})

//real life example- convert to usernames entries converts to array then you can map value[1](grabs 2nd item in array "Santa") value[0](grabs the first item "username0")
//replace is a string function
//loop through like an array 
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username','');
})

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
startLine.padStart
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//trim removes the beginning/endig white space from string
//padEnd(9, '=')  - use intial string and fill in extra space up to 9 characters with '=' entire thing in quotes
//ex
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"


// #3) Get the below object to go from:
let obj = {
  my: 'names',           //array0
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:

Object.entries(obj);            //converts to an array -result
/* [
    ["my", "names"],
    ["is", "Rudolph"],
    ["the", "Raindeer"],
]*/

Object.entries(obj).map(value => value.join(" "));      //converts to one array
// ["my names", "is Rudolph", "the Raindeer"]

Object.entries(obj).map(value => value.join(" ")).join(' ');  //converts to final string
//'my name is Rudolf the raindeer'


//Object spread operator- ES9
const animals = {
    tiger: 23,
    lion: 5, 
    monkey: 2
}

const {tiger, ...rest} = animals;
tiger;          //returns 23
rest;           //returns {lion: 5, monkey: 2} 

//similiar too 
const array = [1,2,3,4,5];
function sum (a,b,c,d, e){
    return a + b + c + d + e;
}
sum(1,2,3,4,5);         //returns 15
sum(...array);          //returns 15

//able to  spread the array over the paramaters

//another example with an object
const animals = {
    tiger: 23,
    lion: 5, 
    monkey: 2,
    bird: 40
}

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest} = animals;

objectSpread(tiger, lion, rest);

//23
//5
//{monkey:2, bird:40}

//Async ES9 

//ES9  - finally / for await feature
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}


const myObject = {
  a: 1,
  b: 2,
  c: 3
};

const { a, ...x } = myObject;
// a = 1
// x = { b: 2, c: 3 }

//finally
const urls = [
  'https://swapi.py4e.com/api/people/1',
  'https://swapi.py4e.com/api/people/2',
  'https://swapi.py4e.com/api/people/3',
  'https://swapi.py4e.com/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here'))




const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json();
    console.log(data)
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}