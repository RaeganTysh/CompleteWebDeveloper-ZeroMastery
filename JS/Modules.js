//The mountain of modules

//------IIFE-----
//js1 first file loaded
var myApp ={}           //on the window object

//j2 sencond file loaded
//have there own scope and add everything associated with the global variable as a method/function (IFFE)- doesn't clutter global namespace 
//the issue is the order of the file is still very important in script tag order in html
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();           //th () means after you evalute run the function

//jQuery uses this: allows us to use the $

//------Common JS + Browserify------
//Browserify will read all the Script tags and  bundle them into one before web page is online "module.exports" //all scripts on one massive file- works when deploy it
//js1 first file loaded (assume it called add.js)
module.exports = function add( a, b) {                  //Browserify uses module.exports syntax which is actually a Module Bundler 
    return a + b;                                        //which reads all the js and sytax and bundles into a single file before the website is put online    

}
//js2
var add = require('./add');

//------ES6 + Webpack2-----

//This issues happened because JS didn't have the module system - so many ways to import and export
//Intro of ES6 - export and import
//js1
export const add = (a, b) => a + b;             //export multiple function in the same file
//or
export default function add() {                 //export one thing
 return a + b;

}
//js2
import {add} from '.add';                   //import, destructing and grabbing add (multiple items with brackets)
//or
import add from './add';                    //export one item


//browsers don't alwasy support everything yet
//webpack- module bundler- traverses the dependancy tree (export/import tags) - webpacks used to assitst browsers that hvaent implemented browserify yet
//will use alot in React section


//webpack- set up the config file
module.exports = {
    entry: "/.app/main.js",
    output: {
        path: "./dist",
        filename: 'bundle.js'                   //HTML script tage: <script src="bundle.js"></script> all js files bundled into this one file
    }
}
