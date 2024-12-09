const add = function(number1, number2) {
	let result = number1 + number2;
  return result;
};

const subtract = function(number1, number2) {
  let result = number1 - number2;
  return result;
};

const sum = function(array) {
	let result = array.reduce((a,b) => a + b, 0);
  return result;
};

const multiply = function(array) {
	let result = array.reduce((a,b) => a * b, 1);
  return result;
};

const power = function(number1, number2) {
  let result = number1 ** number2;
  return result;
};

const factorial = function(number1) {
  let result = 1;
  if (number1 === 0){
    return 1;
  }
	for (let i = 2; i<=number1;i++)
  {
    result = result * i;
  }
  return result;
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
