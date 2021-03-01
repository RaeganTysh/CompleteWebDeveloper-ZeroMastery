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
    return fetch(url).then(resp => resp.json())  //net::ERR_FAILED- doesn't like this line
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])

}).catch(()=> console.log('error'))



//promises are  is an object that may produce a single value sometime in the future
//resolves or rejects - only succeeds or fails or rejects once
//Fullfilled, Rejected Pending 

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise5 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    },4000)
});

// #2) Run the above promise and make it console.log "success"
promise5.then(console.log)
// or
promise5.then(resp => console.log(resp))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise6 = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise6.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())   ////net::ERR_FAILED- doesn't like this line
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?