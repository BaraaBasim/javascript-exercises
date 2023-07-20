const removeFromArray = function(array, ...numbers) {
    // let newArry = [];
    // array.forEach((item) => {
    //     if (!numbers.includes(item)){
    //         newArry.push(item)
    //     }
    // })
    // return newArry;



    // Using filter()
    return array.filter((item) => !numbers.includes(item))
    
    
 };

// Do not edit below this line
module.exports = removeFromArray;
