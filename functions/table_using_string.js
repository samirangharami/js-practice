function tableOf(inputNumber) {
  let table = "";
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    const product = inputNumber * multiplier;
    table = table + "\n" + (inputNumber + "X" + multiplier + "=" + product);
  }
  console.log(table);
}

tableOf(4);
