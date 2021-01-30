//ES10 (2019)
//.flat()- mehtod to use on arrays
const array = [1, 2, 3, 4, 5];
array.flat();                //does nothing with a single array

const array2 = [1, [2, 3], [4, 5]];
array2.flat();                //works with nested arrays-joins to flatten it to one array

const array3 = [1, 2,[ 3, 4, [5]]];
array3.flat();              //the deep [5] array was only flattend one level - default

const array4 = [1, 2,[ 3, 4, [5]]];
array4.flat(2);              //the deep [5] array was only flattend two level  

const array5 = [1, 2,[ 3, 4, [5], 6, 7], [[[[8,]]]]];
array5.flat(50);       //if you don't know how many nests/or don't want to count- just pick a number greater and it will unnest

const entries =['bob', 'Sally',,,,,,,'cindy']
entries.flat();                 //cleans up the data

//flatMap()- flat and Map method - for each item we are going to flatten we will get the ,'8'
const array5 = [1, 2,[ 3, 4, [5], 6, 7], [[[[8,]]]]];
const array5map = array5.flatMap(num => num + ',8' );
array5map;          


//trimStart & trimEnd
const userEmail = '             eddytheeagle@gmail.com';
const userEmail2= 'johnydangerous@gmail.com           ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries - input incorrectly as arrays not very useful - want to convert into an object
userProfiles = [['commanderTom', '23'], ['dereckZlander', '40'], ['hansel', '34']];

const obj= Object.fromEntries(userProfiles);
obj;

//obj back into an array
userProfiles = [['commanderTom', '23'], ['dereckZlander', '40'], ['hansel', '34']];

const obj= Object.fromEntries(userProfiles);
Object.entries(obj);        //ES8 allows us to convert it back to an array

// update to a feature to the try catch block
try {
    4+5
} catch {
    
}       //9

try {
    true + 'hi'                     //type coercion - converts/turns true into a string
} catch {
    console.log('you messed up');
}           //truehi

try {
    bob + 'hi'                     //doesn't recognize bob
} catch {
    console.log('you messed up');
}               //you messed up

//previous JS - previously had to pass a parameter (error) or wouldn't work e ven when working properly
try {
    bob + 'hi'                     
} catch (error) {
    console.log('you messed up' + (error));
}      





// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(10);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetArr = greeting.flatMap( arr => arr.join(' '));
console.log(greetArr);



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flatMap(arr => arr.join(' ')).join(' ');

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(100);
//or
trapped.flat(Infinity);


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
userEmail3.trimEnd().trimStart();


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
userArr = Object.entries(users);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
userIDx2 = userArr.map((x) => [x[0], x[1]*2]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
Object.fromEntries(userIDx2);
