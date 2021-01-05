/*user need to be in the database*/
var database =[
    {
        username: "Raegan",
        password: "1234"
    }
];

var newsfeed = [
    {
        username: "Cody",
        tiemeLine: "So tired from all that javascript learning"
    },
    {
      username: "Frank",
      timeLine: "Js is so cool"  
    }
];

var userNamePrompt = prompt("what's you username");
var passwordPrompt = prompt("what's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log (newsfeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}
/*userNamePrompt/passwordPrompt are the arguments for user and pass in signIn function*/
signIn(userNamePrompt, passwordPrompt);


