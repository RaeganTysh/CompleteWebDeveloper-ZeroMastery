var todos = [
    "clean room",
    "brush teeth",
    "excersize",
    "study javascript",
    "eat healthy"
];

//for loop

for (var i=0; i < todos.length; i++) {
    console.log(todos[i] +"!")
}

for (var i=0; i < todos.length; i++) {
    todos[i]=todos[i] +"!";
}
console.log(todos);
//should have an empty array- pop didn't work-why??
var todosLength = todos.Length;
for (var i=0; i < todosLength; i++) {
    todos.pop();
}
console.log(todos);//

//while loop- checks condition first- then loops
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne ++;
}

var counterTwo = 10;
while (counterTwo > 0) {
    console.log(counterTwo);
    counterTwo --;
}

//do while loop -does loop - then check condition 
var counterThree = 10
do {    
    console.log(counterThree);
    counterThree--;
}while (counterThree > 0);

//Example  while- do while difference- while doesn't run, do-while runs
var counterFour = 10;
while (counterFour > 10) {
    console.log("while loop", counterFour);
    counterFour --;
}

//do while loop -does loop - then check condition 
var counterFive = 10
do {    
    console.log("do while", counterFive);
    counterFive--;
}while (counterFive > 10);

//forEach loop- takes and array asks fo an argument

todos.forEach(function(i) {
    console.log(i);

})

todos.forEach(function(todos) {
    console.log(todos);

})

todos.forEach(function(todo, i) {
    console.log(todo, i);

})






