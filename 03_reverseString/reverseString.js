const reverseStringZzz = function(word) {
    let result = "";
    for (let i = word.length; i >= 0; i--){
        result += word.charAt(i);
    }
    return result
};

const reverseString = function(word) {
    return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
