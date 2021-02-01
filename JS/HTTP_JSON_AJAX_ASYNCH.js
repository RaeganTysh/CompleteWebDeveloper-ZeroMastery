//Asynchronous JS - intro
console.log('1');
setTimeout(() => {                  //setTimeout is part of a web API
    console.log('2');
}, 2000)
console.log('3');       //1, 3, 2 after 2 seconds 2000ms


//try again 0 seconds
console.log('1');
setTimeout(() => {                  
    console.log('2');
}, 0)                               //even though it is 0 seconds it still goes through the process- the time it moves into the callback que and the event loop 
console.log('3');                   //and back to the call stack takes time


//CALL STACK