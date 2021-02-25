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
    .catch(() => console.log("Errrrroooor!"));  //Errrrroooooor!

//Error/ Catch
promise
.then(result => {
    throw Error
    return result + '!!'
}) 
.then(result2 => {
      console.log(result2);
})                  
.catch(() => console.log('Errrrroooor!'));

//what happens
promise
    .then(result => result + '!')           //Stuff worked!
    .then(result2 => result2 + '?')         //Stuff worked!?
    .catch(() => console.log('error'))       //catch only runs if something fails in something before it  
    .then(result3 => {
        console.log(result3 + '!');         //Stuff worked!?!
    })              
    
    
    //Stuff worked!?!

