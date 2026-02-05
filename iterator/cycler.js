function* generator() {
  const arr = [1, 2, 3, 4, 5];
  let i = 0;
  
  while (true) {
    yield arr[i % 5];
    i++;
  }
}

const cycle = generator();

setInterval(() => {
  console.log(cycle.next());
}, 200);
