/*remember this accesses an array not the element*/
/*Keyboard and mouse events ex)click /mouse enter/leave/refresh...ect*/
/*var button1 = document.getElementsByTagName("button")[1];
button1.addEventListener("click", function () {
	console.log("CLICK!!!");
})*/

/*select the button and input tags*/
/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");

var ul = document.querySelector("ul");*/

/*addEventListner and test if working */
/*button.addEventListener("click", function () {
	console.log(input.value);
	console.log("click is working!!!");
})*/

//*adds item "test" to bottom of list
/*button.addEventListener("click", function() {
	var li = document.createElement("li");   
	li.appendChild(document.createTextNode("testing"))
	ul.appendChild(li);
})*/

/*function inputLength() {
	return input.value.length;   //cleaning up the code
}*/

/*add input value to text to bottom of list */
/*function createListElement() {
	if (input.value.length > 0) {				//if input is 0 do nothing
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";					//clears the inuput value 
	}
}*/

/*function createListElement() {
	if (input.value.length > 0) {				//if input is 0 do nothing
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";					//clears the inuput value 
	}
}*/

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

//button.addEventListener("click", addListAfterClick);

//input.addEventListener("keypress", addListAfterKeypress);


//adds event listener to
/*button.addEventListener("click", function () {
	if (input.value.length > 0) {				//if input is 0 do nothing
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";					//clears the inuput value 
	}
})*/

///keyCode, keypress, keyBoardEvent and event.which no longer recomended
//add event liststen to enter key- everytime you push a key it adds to list- depreciated don't use
/*input.addEventListener("keypress", function() {
	//console.log(event);	
	//event.which depreciated //when user presses key give all the stats in console under "KeyBoard Event"	- keyCode 13 therefore
	//if (input.value.length > 0 && event.keyCode === 13); {		//keyCode depreciated 
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";					//clears the inuput value 
	}
})*/

//DRY - do not repeat yourself - extract logic out and do some refactoring

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;   //input length as it's own function- cleaning up the code
}

function createListElement() {
	if (input.value.length > 0) {		//create list element own function reuse code - clean up the code
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";					//clears the inuput value 
	}
}

button.addEventListener("click", function () {
	if (inputLength() > 0) {				//use function
		var li = document.createElement("li");
		createListElement();				//use function   
	}
})

//how to add event listener for enter key
input.addEventListener("keyup", function() {
	if (inputLength() > 0 && KeyboardEvent.code === 13) {  //what is the code for this??
		createListElement();
	}
})
 
//do not work!!
//if (inputLength() > 0 && charCodeAt === 13)
//if (inputLength() > 0 && keyCode === 13)
//if (inputLength() > 0 && keydown) 
//if (inputLength() > 0 && event.keyCode === 13)
