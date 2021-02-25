const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
})

promise.then(result => console.log(result));       //Stuff Worked
promise;        //Stuff Worked


//chaining in promises
promise
    .then(result => result + '!!')
    .then(result2 => {
        console.log(result2);
    })                  //Stuff worked!!

//Error/ Catch
promise
    .then(result => result + '!!')
    .then(result2 => {
        throw Error
        console.log(result2);
    })                  
    .catch(() => console.log("Errrrroooor!"));
