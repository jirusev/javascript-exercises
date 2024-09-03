const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((curent, number) => {
    return curent + number;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((curent, number) => {
    return curent * number;
  }, 1);
};

const power = function (number, pow) {
  return Math.pow(number, pow);
};

const factorial = function (number) {
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};


console.log(sum([1, 2, 3]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
