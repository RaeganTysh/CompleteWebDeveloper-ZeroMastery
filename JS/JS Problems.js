//Practice Probelms
//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const sortedArray2 = array.sort();                      //by default sorts elements alphabetically 
console.log(sortedArray2);
const sortedArray = array.sort((a, b) => a - b);      //for numerical values ascending 
const sortedArray = array.sort((a, b) => b - a);     //for numerical values descending
console.log(sortedArray);
const sortedArray4 = array.slice().sort((a, b) => a - b);  //also works but unecessary
console.log(sortedArray4);


//Q1 Solution
const q1_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const q1_arrString = 
function cleanRoom(arr) {

    
    let sortedArray = arr.sort((a, b) => a - b);
    let temp = []; //allocate memeory and where duplicates are stored temporarily
    let subArray = [];

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {        //if index of current equals index of next ADD it to temp array
            temp.push(sortedArray[i])
        } else if (sortedArray[i] === sortedArray[i - 1]) { //make sure to chekc/push first value as well
            temp.push(sortedArray[i]);                      //if index of current equal index of previous push to temp array
            subArray.push(temp);                            //push temp array to subArray to clear temp array
            temp = [];                                      //clear temp array for next loop
        } else if (sortedArray[i] !== sortedArray[i]) {
            subArray.push(sortedArray[i]);
        }
        
      }
      return cleanRoom;
}





/*let counter =0;

function cleanRoom(array){
    array.forEach(item => {
        if (a = item);{
            a = [item];
        }
    })
    return a;
}
cleanRoom(array);*/


//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]