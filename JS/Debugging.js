//debuggind

const flattened = [[0, 0], [2, 3], [4,5]].reduce(
    (a,b) => a.concat(b), []);


//debbuging 
//understand the code
//console.log - see results
const flattened = [[0, 1], [2, 3], [4,5]].reduce(
    (accumulator, array) =>  {
    console.log('arrary', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array) 
    }, []);

    
//results show first loop and the accumulator which is the emty array esentially 
//2nd loop is the second array and the accumulator is the first array
//3rd loop is the thrird array and the accumulator it the first and second array
//final step is to concat all the arrays together

//can also use debugger
const flattened = [[0, 1], [2, 3], [4,5]].reduce(
    (accumulator, array) =>  {
    debugger;                           //analyse functions
    return accumulator.concat(array) 
    }, []);
