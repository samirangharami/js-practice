function* recursion(chunksOf, overLap) {
  const chunk = [];
  let count = 0;
  for (let currNumber = 1; currNumber < 100; currNumber++) {
    chunk.push(currNumber);
    count++;

    if (count === chunksOf) {
      yield [...chunk];
      count = 0;
      chunk.length = 0;
      currNumber -= overLap;
    }
  }
}

const chunksOf = 3;
const overLap = 2;
const chunks = recursion(chunksOf, overLap);

console.log([...chunks]);
