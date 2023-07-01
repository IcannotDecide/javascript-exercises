const add = function(a, b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  return arr.reduce((total, item) => {
    return total + item
  }, 0)
};

const multiply = function(...theArgs) {
  var total = 1;
  for (const arg of theArgs) {
    total *= arg
  }
  return total
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    console.log(total, i)
    total *= i
  }
  return total
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
