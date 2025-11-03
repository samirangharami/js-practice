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

function bencoderCipherDecoder(data) {
  switch (data[0]) {
    case 'i':
      return parseInt(data.slice(1, data.length - 1));
    default:
      return data.slice(2, data.length);
  }
}

function formatText(input, actualOutput, expectedOutput) {
  return `
  | Inputs  : ${input}
  | Actual  : ${actualOutput}
  | Expected: ${expectedOutput}
  -------`;
}

function testBencoderCipher(data, taskToDo, description, expectedOutput) {
  const actualOutput = taskToDo === 'encode' ? bencoderCipherEncoder(data) : bencoderCipherDecoder(data);
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

function testBencoderCipherEncoder() {
  console.log('\nBencoder cipher: encoding');
  console.log('-'.repeat('Bencoder cipher: encoding'.length), '\n');

  testBencoderCipher(1, 'encode', 'one digit integer', 'i1e');
  testBencoderCipher(123, 'encode', 'three digit integer', 'i123e');
  testBencoderCipher(0, 'encode', '0 as data', 'i0e');
  testBencoderCipher(99999, 'encode', 'five digit integer', 'i99999e');
  testBencoderCipher('hi', 'encode', 'string', '2:hi');
  testBencoderCipher('hi hello', 'encode', 'string with space', '8:hi hello');
  testBencoderCipher('', 'encode', 'empty string', '0:');
  testBencoderCipher([1], 'encode', 'array', 'li1ee');
  testBencoderCipher([1, 2, 3], 'encode', 'array with 3 elements', 'li1ei2ei3ee');
  testBencoderCipher([], 'encode', 'empty array', 'le');
  testBencoderCipher([1, 'hello'], 'encode', 'array with int and str', 'li1e5:helloe');
  testBencoderCipher([1, 'hello', [1, 2]], 'encode', 'array with different data types', 'li1e5:helloli1ei2eee');
  testBencoderCipher([1, 'hello', [1, 2], [], [[1, 2], [1, 3]], [[], []], 1], 'encode', 'final boss', 'li1e5:helloli1ei2eelelli1ei2eeli1ei3eeelleleei1ee');
}

function testBencoderCipherDecoder() {
  console.log('\nBencoder cipher: decoding');
  console.log('-'.repeat('Bencoder cipher: decoding'.length), '\n');

  testBencoderCipher('i1e', 'decode', 'one digit integer', 1);
  testBencoderCipher('i123e', 'decode', 'three digit integer', 123);
  testBencoderCipher('i0e', 'decode', 'decoding 0', 0);
  testBencoderCipher('2:hi', 'decode', 'string', 'hi');
  testBencoderCipher('8:hi hello', 'decode', 'string with spaces', 'hi hello');
  testBencoderCipher('0:', 'decode', 'empty string', '');
}

function testAll() {
  testBencoderCipherEncoder();
  testBencoderCipherDecoder();
}

testAll();
