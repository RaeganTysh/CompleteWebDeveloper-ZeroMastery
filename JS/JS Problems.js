//Practice Probelms
//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
//playing with arrays
const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const sortedArray2 = array.sort();                      //by default sorts elements alphabetically 
console.log(sortedArray2);
const sortedArray = array.sort((a, b) => a - b);      //for numerical values ascending 
const sortedArray = array.sort((a, b) => b - a);     //for numerical values descending
console.log(sortedArray);
const sortedArray4 = array.slice().sort((a, b) => a - b);  //also works but unecessary
console.log(sortedArray4);
const array2 = [1, "2", "3", 2];
const arraySort2=array2.sort();
console.log(arraySort2);            //[1, "2", 2, "3"]


//Q1 Solution
const q1_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const q1_arrString = [1, "2", "3", 2];

function cleanRoom(array) {
    
    let sortedArray = array.sort((a, b) => a - b);            //this works for first part of question q1_arr when it's just
    let temp = [];                                              //allocate memeory and where duplicates are stored temporarily
    let subArray = [];
    let cleanArr = [];
    let arrString = sortedArray.filter(item => typeof item === "string");  //filters array into string for bonus
    let arrNum = sortedArray.filter(item => typeof item === "number");          //filters array into Num for bonus

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === arrNum[i + 1]) {        //if index of current equals index of next ADD it to temp array
            temp.push(arrNum[i])
        } else if (arrNum[i] === arrNum[i - 1]) { //make sure to chekc/push first value as well
            temp.push(arrNum[i]);                      //if index of current equal index of previous push to temp array
            subArray.push(temp);                            //push temp array to subArray to clear temp array
            temp = [];                                      //clear temp array for next loop
        } else if (arrNum[i] !== arrNum[i + 1]) {
            subArray.push(arrNum[i]);
        }
    }

    cleanArr = cleanArr.concat([subArray], [arrString])
    //if arrString is empty then remove array
    if (cleanArr[1][0] === undefined){
        cleanArr.pop()
    }
    return cleanArr;
}

console.log("\t array with numbers =>", cleanRoom(q1_array));
//should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
console.log("\t array with strings =>", cleanRoom(q1_arrString));
//should return [[1,2], ["2", "3"]]

//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]



//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.



