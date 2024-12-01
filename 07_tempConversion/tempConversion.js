const convertToCelsius = function(fahrenheit) {
  let celsius = 0
  celsius = (fahrenheit-32) / 1.8
  celsius = Math.round(celsius * 10) / 10
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0
  fahrenheit = celsius * 1.8 +32
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
