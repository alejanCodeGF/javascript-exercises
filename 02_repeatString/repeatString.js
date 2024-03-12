const repeatString = function(str, n) { // repeat str * n times
    if (n < 0) return "ERROR"
    let result = "";
    for (let i = n; i > 0; i--){
        result += str;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
