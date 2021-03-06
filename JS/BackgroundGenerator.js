var css = document.querySelector("h3");  //selects h3 tag
var color1 = document.querySelector(".color1");  //selects class tag
var color2= document.querySelector(".color2");  //selects class tag
var body = document.getElementById("gradient"); //gradient is associated with body in the DOM

//testing
//console.log(css);
//console.log(color1);
//console.log(color2);
//console.log(body);
//body.style.background = "red";

//we want to listen to an event 
//click, mousemovement, keypress- also input
//set a function to pick up the user input

/*color1.addEventListener("input", function() {
    //console.log(color1.value);
    body.style.background =
     "linear-gradient(to right, "
      + color1.value 
      + ", " 
      + color2.value 
      + ")";

})

color2.addEventListener("input", function() {
  // console.log(color2.value);
    body.style.background =
     "linear-gradient(to right, "
      + color1.value 
      + ", " 
      + color2.value 
      + ")";
     
})*/

//clean up the code
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//many ways to add to the DOM
//css.innerHTML
//css.createTextNode
//css.TextContent

//color1.addEventListener("input", setGradient);  //event gets triggered automatically don't need to call function setGradient()- gets called everytime the input is selected

//color2.addEventListener("input", setGradient);


//could also use onclick or oninput in html to call the function
//which is better-adding JS to HTML or JS- better in JS - 
//seperation of concerms and more more extensible 


/*Additional excerisizes 
1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.*/