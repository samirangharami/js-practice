function* generator(united) {
  const divided = [united[0]];
  for (let index = 1; index < united.length; index++) {
    if (united[index] !== united[index - 1]) {
      yield [...divided];
      divided.length = 0;
    }
    divided.push(united[index]);
  }
  yield divided;
}

const united = [1, 1, 1, 2, 2, 1, 1, 3, 3, 2];
const partition = generator(united);

console.log([...partition]);
