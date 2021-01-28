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