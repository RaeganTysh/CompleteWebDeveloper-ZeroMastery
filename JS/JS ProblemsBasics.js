//1. Write a JavaScript program to display the current day and time in the following format. 
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

//2.Write a JavaScript program to print the contents of the current window.
function printPage(){
    window.print();         //opens the print window in JS

}

//3.Write a JavaScript program to get the current date. mm-dd-yy 
function clickDate() {
    var today = new Date();
    var day = today.getDay();  //index 2
    var weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var showDay= weekday[day];
    //console.log(showDay);
    document.getElementById("dayWeek").innerHTML= "Today is: " + showDay;

   // var month = today.getMonth() + 1;  //0=Jan 11=Dec
    var month = ((today.getMonth()+1) <10 ?'0':'')+(today.getMonth()+1); //if less that 10 insert 0 otherwise  leave alone
    //console.log(month);
    var date = ((today.getDate()) <10 ?'0':'')+today.getDate();  //1= 1st day of month
    //console.log(today.getDate())
    //console.log(date);
    var year = today.getFullYear();
    //console.log(today.getFullYear());
    //document.getElementById("date").innerHTML = month + "-" + date + "-" + year;

    var hour = ((today.getHours()) <10 ?'0':'')+ today.getHours();
    var minute = ((today.getMinutes()) <10 ?'0':'')+ today.getMinutes();
    var second = ((today.getSeconds()) <10 ?'0':'')+ today.getSeconds();
    var time= today.getTime();
    /*console.log(hour);
    console.log(minute);
    console.log(second);
    console.log(time);  //milliseconds sine midnight Jan 1, 1970*/
    
    document.getElementById("date").innerHTML = month + "-" + date + "-" + year + " &  " + hour + ":" + minute + ":" + second;
}

//4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function triangleArea() {
  const a = 5;
  const b = 6;
  const c = 7;
  const p = (a + b +c-/2 ;    //p= perimeter
  const area =  Math.sqrt((p*(p-a)*(p-b)*(p-c)));
  return area;
}
triangleArea();