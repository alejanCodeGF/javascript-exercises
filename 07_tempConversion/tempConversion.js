const convertToCelsius = function(degreesF) {
  return Math.round((5/9)*(degreesF - 32) * 10) / 10
  //return Number(((5/9)*(degreesF - 32)).toFixed(1));
};

const convertToFahrenheit = function(degreesC) {
  return Math.round((degreesC*(9/5) + 32) * 10) / 10
  //return Number((degreesC*(9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
