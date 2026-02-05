function* generator() {
  for (let i = 1; i < 5; i++) {
    for (let j = i + 1; j <= 5; j++) yield [i, j];
  }
}

const pairPermutation = generator();

console.log([...pairPermutation]);
