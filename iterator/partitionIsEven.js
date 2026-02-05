const evenOrOdd = (number) => {
  if ((number & 1)) return "odd";
  return "even";
};

function* divide(united) {
  const divided = [united[0]];
  let lastState = evenOrOdd(united[0]);

  for (let index = 1; index < united.length; index++) {
    const parityOfCurrentNumber = evenOrOdd(united[index]);

    if (parityOfCurrentNumber !== lastState) {
      yield [...divided];
      lastState = parityOfCurrentNumber;
      divided.length = 0;
    }

    divided.push(united[index]);
  }

  yield divided;
}

const united = [1, 3, 1, 2, 10, 1, 1, 3, 5, 13, 2];
const partition = divide(united);

console.log([...partition]);
