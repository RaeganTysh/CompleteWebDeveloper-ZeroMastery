/*Exercise: DOM Events
Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

Good Luck!

Please note that: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

PS - if you have any questions, reach out to our community in the #js or #helpme channel on Discord (Lecture 2 provides the link if you have not yet joined)!*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    //try to append list item in button
    //var newButton = document.createElement("button")
    
    //li.appendChild(newButton(document.createTextNode(input.value)));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


var button2 = document.getElementById("done");   //grabs element from HTML and saves it to button
console.log(button2);
//let done = document.querySelector(done);      //grabs class from css
let toggleOn = false;
/*let buttonStates = {
    toggleOn= "true";
    toggleOn
}*/

button2.addEventListener("click", () => {     //set up to listen for click event
   
    toggleOn = !toggleOn;       //flips the current Boolean value off toggleOn from false to true
    if(toggleOn === true){
        button2.style.display.textDecoration = "line-through";
    }else {
        button2.style.textDecoration = "none";
        //button.style.display = "inline-block";
    }

    //button.innerText = buttonStates[button.innerText];

})