function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

function feedback(number, actualOutput, expectedOutput) {
  const emoji = actualOutput === expectedOutput ? "✅" : "❌";

  const firstFragment = "[" + "number:" + number + "]";
  const secondFragment = "\nactual output:" + actualOutput;
  const thirdFragment = " | expected output:" + expectedOutput + "\n";
  const message = emoji + firstFragment + secondFragment + thirdFragment;

  return message;
}

function test(number, expectedOutput) {
  const actualOutput = factorial(number);
  const message = feedback(number, actualOutput, expectedOutput);

  console.log(message);
}

function testAll() {
  test(0, 1);
  test(1, 1);
  test(2, 2);
  test(3, 6);
  test(4, 24);
  test(5, 120);
  test(6, 720);
  test(7, 5040);
  test(11, 39916800);
  test(13, 6227020800);
}

testAll();