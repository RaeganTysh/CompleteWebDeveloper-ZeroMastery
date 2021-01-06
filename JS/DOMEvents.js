/*remember this accesses an array not the element*/
/*Keyboard and mouse events ex)click /mouse enter/leave/refresh...ect*/
var button1 = document.getElementsByTagName("button")[1];
button1.addEventListener("click", function() {
	console.log("CLICK!!!");
})

/*select the button and input tags*/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

/*addEventListner and test if working */
button.addEventListener("click", function() {
	console.log(input.value);
	console.log("click is working!!!");
})






function inputLength() {
	return input.value.length;
}

/*add text to bottom of list */
function createListElement() {
	if(input.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
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