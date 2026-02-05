function* recursion(fn, parameter) {
  let intermediate = parameter;
  while (true) {
    intermediate = fn(intermediate);
    yield intermediate;
  }
}

const add2 = (number) => number + 2;

const substract2 = (number) => number - 2;

const multiply2 = (number) => number * 2;

const square = (number) => number ** 2;

const outputs = recursion(multiply2, 2).take(10);

console.log([...outputs]);
