function ap(nThTerm) {
  if (nThTerm === 0) {  
    return 0;
  }

  return nThTerm + ap(nThTerm - 1);
}


function feedback(nThTerm, actualOutput, expectedOutput) {
  const emoji = actualOutput === expectedOutput ? "✅" : "❌";

  const firstFragment = "[" + "nth term:" + nThTerm + "]";
  const secondFragment = "\nactual output:" + actualOutput;
  const thirdFragment = " | expected output:" + expectedOutput + "\n";
  const message = emoji + firstFragment + secondFragment + thirdFragment;

  return message;
}

function test(nThTerm, expectedOutput) {
  const actualOutput = ap(nThTerm);
  const message = feedback(nThTerm, actualOutput, expectedOutput);

  console.log(message);
}

function testAll() {
  test(10, 55);
  test(12, 78);
  test(50, 1275);
  test(20, 210);
  test(25, 325);
  test(40, 820);
}

testAll();