function* generator() {
  let i = 1;
  while (true) {
    yield (i & 1) ? i + 1 : i - 1;
    i++;
  }
}

const generateSequence = generator().take(10);

console.log([...generateSequence]);
