function* generator(sentence) {
  let startIndex = 0;
  while (startIndex < sentence.length) {
    let delimiterIndex = sentence.indexOf(" ", startIndex);
    if (delimiterIndex < 0) delimiterIndex = Infinity;
    yield sentence.slice(startIndex, delimiterIndex);
    startIndex = delimiterIndex + 1;
  }
}

const extractWord = generator("outbound starts on monday");
console.log([...extractWord]);
