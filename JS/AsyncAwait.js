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


//the same - syntactic sugar
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await rsponse.json();      //response returns a promise
    console.log(data);

}    

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));