const fibonacci = function(n) {
    let f = parseInt(n);
    if (f < 0) return "OOPS"
    
    let i1 = 0;
    let i2 = 1;
    let temp = 0

    while (f > 0){
        temp = i2
        i2 = i1 + i2;
        i1 = temp;
        f--;
    }

    return i1;
};

// Do not edit below this line
module.exports = fibonacci;
