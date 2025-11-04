function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] < sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

function medianOf(data) {
  const sortedData = sort(data);
  const middleIndex = (sortedData.length - 1) / 2;
  const floored = Math.floor(middleIndex);
  const ceiled = Math.ceil(middleIndex);

  return (sortedData[floored] + sortedData[ceiled]) / 2;
}

function formatText(input, actualOutput, expectedOutput) {
  return `
  | Inputs  : ${input}
  | Actual  : ${actualOutput}
  | Expected: ${expectedOutput}
  -------`;
}

function testCode(data, description, expectedOutput) {
  const actualOutput = medianOf(data);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";
  const headline = `${symbol} ${description}`;

  console.log(headline);

  if (!isEqual) {
    const input = data;
    const details = formatText(input, actualOutput, expectedOutput);

    console.log(details);
  }
}

function testMedianOf() {
  console.log('\nMedians');
  console.log('-'.repeat('Medians'.length), '\n');

  testCode([0, 58, 50, 51, 12, 113, 57, 0, 21], 'yuvraj 2011 wc batting', 50);
  testCode([0, 0, 5, 2, 0, 2, 2, 2, 2], 'yuvraj 2011 wc bowling', 2);
  testCode([1, 3, 5, 7, 9], 'Odd number of elements', 5);
  testCode([2, 4, 6, 8], 'Even number of elements', 5);
  testCode([10], 'Single element array', 10);
  testCode([5, 5, 5, 5, 5], 'All elements are the same', 5);
}

testMedianOf();
