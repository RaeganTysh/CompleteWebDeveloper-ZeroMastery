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


//another example  
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
})  

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIIIII');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me your are looking for?');
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

//Another example- not working

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',

]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])

})