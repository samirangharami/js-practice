function* generator() {
  let i = 1;
  while (true) yield [i, ++i];
}

const generateSequence = generator().take(10);

console.log([...generateSequence]);
