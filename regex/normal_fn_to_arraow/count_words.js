const countWords = (sentence) => {
  let count = 0;

  for (let textIndex = 0; textIndex < sentence.length; textIndex++) {
    const isSkippable = isALetter(sentence, textIndex);

    if (isSkippable) {
      textIndex = nextSkippable(sentence, textIndex);
      count = count + 1;
    }
  }
  return count;
}

const isALetter = (sentence, index) => {
  const conditionForSpace = sentence[index] !== " ";
  const conditionForNLine = sentence[index] !== "\n";
  const conditionForT = sentence[index] !== "\t";
  const isalphabet = conditionForNLine && conditionForSpace && conditionForT;

  return isalphabet;
}

const nextSkippable = (sentence, textIndex) => {
  for (let index = textIndex; index < sentence.length - 1; index++) {
    const isSkippable = isALetter(sentence, index);

    if (!isSkippable) {
      return index;
    }
  }
}

console.log(countWords("hello everyone"));