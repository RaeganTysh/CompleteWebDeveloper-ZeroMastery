//condition ? expression1 : expression 2;
//is this "condition" true or false if it's true provide expression1 if not provide expression2

//run the folllowing in console
//ex1
function isUserValid (bool) {
    return bool;
}

var answer= isUserValid(true) ? "You may enter" : "Access Denied";
answer;


//ex2
function isUserValid (bool) {
    return bool;
}

var answer= isUserValid(false) ? "You may enter" : "Access Denied";
answer;

//ex3
function isUserValid (bool) {
    return bool;
}


var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");

automatedAnswer;

//ex4
function isUserValid (bool) {
    return bool;
}

//why can I run one or the other but not both (answer automatedAnswer)
var answer= isUserValid(false) ? "You may enter" : "Access Denied";
answer;
var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");
automatedAnswer;

//ex4 compare ternary operator to condition statement

function isUserValid (bool) {
    return bool;
}

var answer= isUserValid(true) ? "You may enter" : "Access Denied";

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    }else {
        return "Access denied";
    }
    
}

var answer2= condition();

answer;
answer2;