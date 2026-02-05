const dbg = (x) => {
  console.log(x);
  return x;
};

const arr = [1, 2, 3, 4, 1, 1, 4, 9];

const frequency = (table, element) => {
  if (!table[element]) {
    table[element] = 0;
  }

  table[element]++;

  return table;
};
console.log(arr.reduce(frequency, {}));
