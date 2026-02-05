function countVowels(word) {
  const lengthOfWord = word.length;
  let vowels = 0;

  for (let currentLetter = 0; currentLetter <= lengthOfWord; currentLetter++) {
    // const isVowel = word[currentLetter] === "a" || word[currentLetter] === "e" || word[currentLetter] === "i" || word[currentLetter] === "o" || word[currentLetter] === "u";
    // if (isVowel) {
    //   vowels++;
    // }
    switch (word[currentLetter]) {
      case value:
        
        break;
    
      default:
        break;
    }
  }
  return vowels;
}

function MostVowels(sentence) {
  sentence = sentence + " ";
  const lengthOfSentence = sentence.length;
  let wordMaking = "";
  let wordWithMostVowels = "";
  let highestNumberOfVowels = 0;

  for (let currentIndex = 0; currentIndex < lengthOfSentence; currentIndex++) {
    wordMaking = wordMaking + sentence[currentIndex];
    if(sentence[currentIndex] === " ") {
      let numberOfVowels = countVowels(wordMaking);
      wordWithMostVowels = numberOfVowels > highestNumberOfVowels ? wordMaking : wordWithMostVowels;
      highestNumberOfVowels = numberOfVowels > highestNumberOfVowels ? numberOfVowels : highestNumberOfVowels;
      wordMaking = "";
    }
  }
  return wordWithMostVowels;
}

const VowelfulWord = MostVowels("sagnik is typing");
console.log(VowelfulWord);