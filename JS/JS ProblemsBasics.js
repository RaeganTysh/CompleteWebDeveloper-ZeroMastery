//Write a JavaScript program to display the current day and time in the following format. 
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
//run in console
function getDayTime() {
//get day
var today = new Date();
  var day = today.getDay();     //0==Sun, 6==Sat
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  //console.log(day);  //2
  //console.log("Today is : " + daylist[day] + ".");  //array[2]= Tuesday
  document.getElementById("Day").innerHTML ="Today is : " + daylist[day] + ".";
//get time
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";  //if hour =>12 make PM otherwise make AM
  //console.log(hour);  //24 hr clock
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')  //if hour =>12 make PM otherwise make AM
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
//console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
document.getElementById("Time").innerHTML ="Current Time: "+ hour  + ": " + minute + ": " + second + prepand
}

//Write a JavaScript program to print the contents of the current window.
function printPage(){
    window.print();         //opens the print window in JS

}

//Write a JavaScript program to get the current date. onclick
function clickDate() {
    var today = new Date();
    var day = today.getDay();  //index 2
    var weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var showDay= weekday[day];

    console.log(showDay);
    document.getElementById("dayWeek").innerHTML= showDay;
}