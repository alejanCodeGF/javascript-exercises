const add = function(n1, n2) {
	return n1+n2;
};

const subtract = function(n1, n2) {
	return n1-n2;
};

const sum = function(list) {
	return list.reduce((sum, current) => sum += current, 0);
};

const multiply = function(list) {
  return list.reduce((sum, current) => sum *= current, 1);
};

const power = function(n1, n2) {
	return n1**n2
};

const factorial = function(n) {
  //n*n-1*n-2...
  if (n < 1) return 1;
  
  sum_fact = 1;
  for (let i = n; i > 0; i--){
    sum_fact *= i;
  }
  return sum_fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
