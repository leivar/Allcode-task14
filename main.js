//Write a JavaScript program to check if a given string is a palindrome. A palindrome is a word that is spelled the same backwards, for instance “kayak”.
function palindrome(string){
    return string==string.split("").reverse().join("");
}
//console.log(palindrome('test'));

//Write a JavaScript program to find the closest value to 100 from two numerical values.
function closestToHoundred(int1, int2){
    if(Math.abs(int1-100) < Math.abs(int2-100)){
        return int1
    } else {
        return int2
    }
}
//console.log(closestToHoundred(45, 46));

//Write a JavaScript program to capitalize the first letter of each word in a given string.
function capitalizeFirstLetter(string){
    myOldWords = string.split(" ");
    myNewWords = [];
    for (let i = 0; i < myOldWords.length; i++){
        myNewWords.push(myOldWords[i][0].toUpperCase()+myOldWords[i].slice(1));
    }
    return myNewWords.join(" ");
}
//console.log(capitalizeFirstLetter("i can see dead people"));

//Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function oneDirection(inputArray){
    outputArray = []
    if (inputArray.length < 1){
        return 'array length must be larger than or equal to 1';
    }
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].toString().slice(0,1)=='1' || inputArray[i].toString().slice(-1)=='1'){
            outputArray.push(inputArray[i])
        }
    }
    if (outputArray.length > 0){
        return outputArray;
    } else {return 'There is no input that starts or ends with 1'}
}
//console.log(oneDirection([10, 20, 301, 4078, 12532, 205843, 4865441]));

//Write a JavaScript program to find the longest string from a given array of strings.
function findLongestString(arrayOfStrings){
    if (arrayOfStrings.length === 0){
        return "The array can't be empty";
    }
    longestStrings = [arrayOfStrings[0]]
    if (arrayOfStrings.length > 1){
        for (let i = 1; i < arrayOfStrings.length;i++){
            if (arrayOfStrings[i].length === longestStrings[0].length){
                longestStrings.push(arrayOfStrings[i])
            } else if(arrayOfStrings[i].length > longestStrings[0].length){
                longestStrings = [arrayOfStrings[i]];
            }
        }
    }
    if (longestStrings.length === 1){
        return longestStrings[0];
    } else {
        return `The following entries tied for being the longest: ${longestStrings.join(' ')}`
    }
}
//console.log(findLongestString(['test', 'longertest', 'equal1test']));

//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeChar(string, int){
    if (string==='' || !Number(int)){
        return "The text can't be empty and we need a valid number";
    }
    if (string.length < int){
        return "Number can't be higher than number of chars in text"
    } else if (int < 1){
        return "Number can't be less than one"
    } else {
        if (int < string.length){
            console.log(string.length);
            return string.slice(0,int-1)+string.slice(int)
        } else {return string.slice(0, int-1)}
    }
}
//console.log(removeChar('my test phrase', 4));

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function checkDivison(int){
    if (int%3 === 0 || int%7 === 0){
        return true
    } else {return false}
}
//console.log(checkDivison(21));

//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkScript(string){
    checkWord = 'Script'
    return (string.slice(4,checkWord.length+4)===checkWord)
}
//console.log(checkScript('The Script is working'))

//Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
function checkFifteen(int1,int2){
    return (int1 === 15 || int2 === 15 || int1+int2 === 15 || int1+15 === int2 || int2+15 === int1)
}
//console.log(checkFifteen(-17, -2))

//Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function concatenateStrings(string1,string2){
    stringLength = Math.min(string1.length,string2.length);
    return string1.slice(0,stringLength)+string2.slice(0,stringLength)
}
//console.log(concatenateStrings("test number one","test2"));

//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function displayCity(string){
    if (string.slice(0,3) === 'Los' || string.slice(0,3) === 'New'){
        return string
    } else { return '' }
}
//console.log(displayCity('ew York'))

//Write a JavaScript program to find the largest value between the first and last elements of an array and set all the other elements to that value. Display the updated array.
function agentSmith(array){
    let largestValue = Math.max(...array.slice(1,array.length-1));
    for (let i=0;i < array.length; i++){
        array[i] = largestValue;
    }
    return (array);
}
//console.log(agentSmith([2,4,6,9,13,17,5,4,21,22]))

//Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
function twiceThirtyForty(array){
    if (array.length > 2){
        return 'not a valid amount of numbers - up to two 2 separate numbers';
    }

let a = array[0];
let b = array[1];

return (a === 30 && b === 30) || (a === 40 && b === 40);
}
//console.log(twiceThirtyForty([30,30]))

//Write a JavaScript program to find the number appearing most frequently in a given array of integers.
function mostFrequent(array){
    let leadingNumber = 0;
    let leadingOccurence = 0;
    for (let i = 0; i < array.length; i++){
        let occurences = array.filter(function(val){
            return val === array[i];
        }).length;
        if (occurences > leadingOccurence){
            leadingNumber = array[i];
            leadingOccurence = occurences;
        }
    }
    return leadingNumber;
}
//console.log(mostFrequent([2,5,7,4,2,5,67,3,4,663,2]))

//Write a JavaScript program to sort the strings of a given array of strings in order of increasing length. Note: Do not change the order if the lengths of two strings are the same.
function sortedByLengthAscending(array){
    return array.sort(function(a,b){return a-b});
}
//console.log(sortedByLength(['Short','Medium','The long one1','The long one2']))