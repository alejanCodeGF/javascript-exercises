const findTheOldest = function(array) {
    return array.reduce(function(maxObj, currentObj) {
        if (Object.entries(maxObj).length === 0){return currentObj}
        else{
            let maxAge = getAge(maxObj["yearOfBirth"], maxObj["yearOfDeath"])
            let currentAge = getAge(currentObj["yearOfBirth"], currentObj["yearOfDeath"])
            
            return (maxAge < currentAge) ? currentObj : maxObj;
        }
    }, {});
};

const getAge = function(birth, death) {
    if (!death){
        death = new Date().getFullYear()
    }

    return (death - birth);
}

// Do not edit below this line
module.exports = findTheOldest;
