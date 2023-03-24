const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * 5/9;
  return Number(temperature.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  temperature = temperature * 9/5 + 32;
  return Number(temperature.toFixed(1));
};


console.log( convertToCelsius(100) );
if (convertToCelsius(100) === 37.8){
  console.log("true");
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
