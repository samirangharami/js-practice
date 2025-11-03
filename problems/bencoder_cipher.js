function bencoderCipherEncoder(data) {
  return `i${data}e`;
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
}

main();
