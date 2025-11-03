function bencoderCipherEncoder(data) {
  const dataType = typeof (data);
  switch (dataType) {
    case 'number':
      return `i${data}e`;
    case 'string':
      return `${data.length}:${data}`;
    case 'object':
      return listEncoder(data);
  }
}

function listEncoder(data) {
  let encodedList = '';
  for (let index = 0; index < data.length; index++) {
    encodedList += bencoderCipherEncoder(data[index]);
  }

  return `l${encodedList}e`;
}

function formatText(input, actualOutput, expectedOutput) {
  return `
  | Inputs  : ${input}
  | Actual  : ${actualOutput}
  | Expected: ${expectedOutput}
  -------`;
}

function testBencoderCipherEncoder(data, description, expectedOutput) {
  const actualOutput = bencoderCipherEncoder(data);
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

function main() {
  console.log('\nBencoder cipher: encoding');
  console.log('-'.repeat('Bencoder cipher: encoding'.length), '\n');

  testBencoderCipherEncoder(1, 'one digit integer', 'i1e');
  testBencoderCipherEncoder(123, 'three digit integer', 'i123e');
  testBencoderCipherEncoder(0, '0 as data', 'i0e');
  testBencoderCipherEncoder(99999, 'five digit integer', 'i99999e');
  testBencoderCipherEncoder('hi', 'string', '2:hi');
  testBencoderCipherEncoder('hi hello', 'string with space', '8:hi hello');
  testBencoderCipherEncoder('', 'empty string', '0:');
  testBencoderCipherEncoder([1], 'array', 'li1ee');
  testBencoderCipherEncoder([1, 2, 3], 'array with 3 elements', 'li1ei2ei3ee');
  testBencoderCipherEncoder([], 'empty array', 'le');
  testBencoderCipherEncoder([1, 'hello'], 'array with int and str', 'li1e5:helloe');
  testBencoderCipherEncoder([1, 'hello', [1, 2]], 'array with different data types', 'li1e5:helloli1ei2eee');
}

main();
