function isCharNotInArray(char, list){ // compare 1 char with a list, and if no one are the char return true
    for (let i of list){
        if (char === i) return false;
    }
    return true;
}

const removeFromArray = function(myArray, ...items) {
    let result = [];

    for (let i of myArray){
        if (isCharNotInArray(i, items))
        {
            result.push(i);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
