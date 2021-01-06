/*user need to be in the database*/
var database = [
    {
        username: "Raegan",
        password: "1234"
    },
    {
        username: "Sally",
        password: "5678"
    },
    {
        username: "Mark",
        password: "9012"
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

/*userNamePrompt/passwordPrompt are the arguments for user and pass in isUserValid &signIn function*/

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user &&
            database[i].password === pass) {
            return true;
        }
    }
    return false;
}

/*function signIn(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user &&
            database[i].password === pass) {
            console.log(newsfeed); tess
        } else {
            alert("Sorry, wrong username and password");
        }
    }
}*/

/* will show true or false in console log*/
function signIn(user, pass) {
    /*console.log(isUserValid(user, pass));*/
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    }else {
        alert("Sorry, wrong username and password");
    }
}

/*function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log (newsfeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}*/
/*userNamePrompt/passwordPrompt are the arguments for user and pass in signIn function*/
signIn(userNamePrompt, passwordPrompt);