//Async Await

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))  //chaining not synchronous
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))


//Promise is an IOU which you have to wait for -so use async

async function plyerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause

}


//Chrome was blocking fetch!! to get fetch to work had to download the CORS unblock and enable
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => console.log(data));


//the same as above - syntactic sugar
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();      //response returns a promise
    console.log(data);
}
fetchUsers();


//fetch way
fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));


//fetch way
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',

]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())  //net::ERR_FAILED- doesn't like this line
})).then(results => {
    console.log('user', results[0])
    console.log('posts', results[1])
    console.log("albums", results[2])

}).catch(() => console.log('error'))


//Async way with try/catch blocks
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',

]

const getData = async function () {
  try{ 
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
    ))
    console.log('user', users)
    console.log('posts', posts)
    console.log("albums", albums)
  } catch (err) {
     console.log('oops', err); 
  }
}
getData();

//finally
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url => {
      return fetch(url).then(people => people.json())   
  }))
    .then(array => {
        throw Error;
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(data => console.log('extra'));  //great for the times when you need to run a piece of code no matter what after a promise

    //for await of
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums',
    
    ]
    
    const getData = async function () {
      try{ 
        const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
        ))
        console.log('user', users)
        console.log('posts', posts)
        console.log("albums", albums)
      } catch (err) {
         console.log('oops', err); 
      }
    }


    //review for of
    const loopThroughUrls = url => {
        for (url of urls) {
            console.log(url)
        }
    }
    loopThroughUrls(urls);



