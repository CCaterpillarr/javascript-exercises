const add = function(number1, ...numbers) {
  let result = number1;
  for (let i = 0; i < numbers.length; i++){
    result = result + numbers[i];
  }
  return result;
};

const subtract = function(number1, ...numbers) {
  let result = number1;
  for (let i = 0; i < numbers.length; i++){
    result = result - numbers[i];
  }
  return result;
};

const sum = function(number1, ...numbers) {
  let result = number1;
  for (let i = 0; i < numbers.length; i++){
    result = result + numbers[i];
  }
  return result;
};

const multiply = function(number1, ...numbers) {
  let result = number1;
  for (let i = 0; i < numbers.length; i++){
    result = result * numbers[i];
  }
  return result;
};

const power = function(base, power) {
  if (power === 0){
    return 1;
  }

  let result = base;
  for (let i = 1; i < power; i++){
    result = result * base;
  }

  return result;
};

function factorial(number) {
  if (number === 0){
    return 1;
  }
  let result = number;
  for (let i = 1; i < number; i++){
    result = result * (number - i);
  }
  return result;
};

console.log(factorial(10));