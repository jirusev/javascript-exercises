const convertToCelsius = function (temp) {
  let result = (temp - 32) * (5 / 9);

  return round(result);
};

const convertToFahrenheit = function (temp) {
  let result = temp * (9 / 5) + 32;

  return round(result);
};

const round = function (number) {
  return Math.round(number * 10) / 10;
}

console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
