const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvxyz0123456789"
    
    let strSimple = "";
    for (let i of str.toLowerCase()){
        if (alphanumerical.includes(i)) strSimple += i;
    }

    return (strSimple === strSimple.split("").reverse().join("")) ? true : false; 
};

// Do not edit below this line
module.exports = palindromes;
