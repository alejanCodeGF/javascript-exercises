const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || 
        n1 !== parseInt(n1) || n2 !== parseInt(n2)) return "ERROR";

    let ni = n1;
    let nf = n2;
    if (n1 > n2) {ni = n2; nf = n1;}

    let result = 0;
    for (let i = nf; i >= ni; i--){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
