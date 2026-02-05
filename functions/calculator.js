const add = function (num1, num2) {
  return num1 + num2;
}

const sub = function (num1, num2){
  return num1 - num2;
}

const mul = function (num1, num2){
  return num1 * num2;
}

const div = function (num1, num2){
  return num1 / num2;
}

const pow = function (num1, num2){
  return num1 ** num2;
}

const root = function (num1, num2){
  const result = num1 ** (1 / num2);
  if(toRound(result)){
    return Math.round(result);
  }

  return result;
}

const toRound = function (number){
  const delta = number - Math.round(number);

  return delta < 0.001;
}

const calculator = function (operation, num1, num2){
  return operation(num1, num2);
}

const result = calculator(root, 4, 3);

console.log(result);