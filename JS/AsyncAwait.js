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

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => console.log(data));