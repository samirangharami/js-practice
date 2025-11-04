function meanOf(data) {
  let sumOfDataFragments = 0;
  for (let index = 0; index < data.length; index++) {
    sumOfDataFragments += data[index];
  }

  return sumOfDataFragments / data.length;
}

function standardDeviationOf(data) {
  const mean = meanOf(data);
  let sumOfSquares = 0;
  for (let index = 0; index < data.length; index++) {
    const variance = data[index] - mean;
    sumOfSquares += variance ** 2;
  }

  return (sumOfSquares / data.length) ** 0.5;
}

function formatText(input, actualOutput, expectedOutput) {
  return `
  | Inputs  : ${input}
  | Actual  : ${actualOutput}
  | Expected: ${expectedOutput}
  -------`;
}

function areApproximatelyEqual(actualOutput, expectedOutput) {
  const delta = actualOutput - expectedOutput;
  const isInRange = delta < 0.00001 || delta < -0.00001;
  if (isInRange) {
    return true;
  }

  return false;
}

function testCode(data, description, expectedOutput) {
  const actualOutput = standardDeviationOf(data);
  const isEqual = areApproximatelyEqual(actualOutput, expectedOutput);
  const symbol = isEqual ? "✅" : "❌";
  const headline = `${symbol} ${description}`;

  console.log(headline);

  if (!isEqual) {
    const input = data;
    const details = formatText(input, actualOutput, expectedOutput);

    console.log(details);
  }
}

function testSDOf() {
  console.log('\nstandard deviation');
  console.log('-'.repeat('standard deviation'.length), '\n');

  testCode([0, 58, 50, 51, 12, 113, 57, 0, 21], 'yuvraj 2011 wc batting', 34.168788389);
  testCode([0, 0, 5, 2, 0, 2, 2, 2, 2], 'yuvraj 2011 wc bowling', 1.4907119849999);
  testCode([1, 2, 3, 4, 5], 'Simple consecutive integers', 1.414213562);
  testCode([5, 5, 5, 5], 'No variation in data', 0);
  testCode([10, 20, 30], 'Small set of spaced numbers', 8.164965809);
  testCode([-3, -2, -1, 0, 1, 2, 3], 'Includes negative numbers', 2.0);
}

testSDOf();
