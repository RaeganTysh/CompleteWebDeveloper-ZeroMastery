//Ternary operators (nice for if/else -check for condition and two possible condtions- cleaner/one line code)
//condition ? expression1 : expression 2;
//is this "condition" true or false if it's true provide expression1 if not provide expression2

//run the folllowing in console
//ex1
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
answer;


//ex2
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access Denied";
answer;

//ex3
function isUserValid(bool) {
    return bool;
}


var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");

automatedAnswer;

//ex4
function isUserValid(bool) {
    return bool;
}

//why can I run one or the other but not both (answer automatedAnswer)
var answer = isUserValid(false) ? "You may enter" : "Access Denied";
answer;
var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");
automatedAnswer;

//ex4 compare ternary operator to condition statement

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }

}

var answer2 = condition();

answer;
answer2;

//switch statements -(use in cases where you have alot of conditions to avoid alot of else/if statements)
//chekcs code line by line if line is true then breaks out of switch statements and returns
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrive home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter valid direction";
    }
    return whatHappens;
}
moveCommand("forward");
//or run this moveCommand is now an object of window
window.moveCommand("forward");
window.moveCommand("back");
window.moveCommand("right");
window.moveCommand("left");
window.moveCommand("gibberish");



//excersizes
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//ex1a-run in console- true case
//set up battle as true false statement 

function winBattle(bool) {
    return (bool)
}
//if user wins the battle then give them 10 points if not give them 1
var experiencePoints = winBattle(true) ? 10 : 1;

experiencePoints;

//ex2a-run in console- true case
function winBattle(bool) {
    return (bool)
}
//if user wins the battle then give them 10 points if not give them 1
var experiencePoints = winBattle(false) ? 10 : 1;

experiencePoints;


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//undefined break is before the variable is defined
//#3 return value when moveCommand("back");
//you arived home
//#4 return value when moveCommand("right");
//you found a river
//#5 return value when moveCommand("left");
//undefined break is before the variable is defined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
