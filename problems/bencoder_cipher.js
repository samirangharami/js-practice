function formatEncode(start, middle, end) {
  return `${start + middle + end}`;
}

function bencoderCipherEncoder(data) {
  const dataType = typeof (data);
  switch (dataType) {
    case 'number':
      return formatEncode("i", data, "e");
    case 'string':
      return formatEncode(data.length, ':', data);
    case 'object':
      return listEncoder(data);
  }
}

function listEncoder(data) {
  let encodedList = '';
  for (let index = 0; index < data.length; index++) {
    encodedList += bencoderCipherEncoder(data[index]);
  }

  return formatEncode('l', encodedList, 'e');
}

function bencoderCipherDecoder(data) {
  switch (data[0]) {
    case 'i':
      return parseInt(data.slice(1, data.length - 1));
    case 'l':
      return listDecoder(data);
    default:
      return data.slice(2, data.length);
  }
}

function listDecoder(data) {
  const decodedList = [];
  let dataFragment = '';

  for (let index = 1; index < data.length - 1; index++) {
    dataFragment += data[index];

    if (data[index] === 'e') {
      decodedList.push(bencoderCipherDecoder(dataFragment));
      dataFragment = '';
    }
  }

  return decodedList;
}

function isArray(arrayCandidate) {
  return typeof arrayCandidate === 'object';
}

function areElementsEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (isArray(array1[index])) {
      return areDeepEqual(array1[index], array2[index]);
    }

    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (!isArray(array1) || !isArray(array2)) {
    return false;
  }

  const areArraysOfSameLength = array1.length === array2.length;

  if (!areArraysOfSameLength) {
    return false;
  }

  return areElementsEqual(array1, array2);
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
  const isEqual = isArray(expectedOutput) ? areDeepEqual(actualOutput, expectedOutput) : actualOutput === expectedOutput;
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
  testBencoderCipher('li1ei2ee', 'decode', 'list', [1, 2]);
  testBencoderCipher('le', 'decode', 'empty array', []);
}

function testAll() {
  testBencoderCipherEncoder();
  testBencoderCipherDecoder();
}

testAll();
