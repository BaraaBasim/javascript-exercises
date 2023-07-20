const reverseString = function(word) {

    // Using built-in methods
    // return word.split("").reverse().join("");


    // Using a for loop
    // let str = "";
    // for (let i = word.length - 1; i >= 0; i--){
    //     str += word[i];
    // }
    // return str;


    // Using Recursion
    if (word === "")
        return ""

    else 
        return reverseString(word.substr(1)) + word.charAt(0)
};

// Do not edit below this line
module.exports = reverseString; 
