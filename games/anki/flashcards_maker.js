const makeFlashcards = (numberOfElements, flashcards = [], count = 0) => {
  if (count >= numberOfElements) {
    if (!confirm("Do you want to add more?")) return flashcards;
  }
  const front = prompt("Front size:");
  const back = prompt("Back size:");
  flashcards.push({ front, back });
  count++;
  return makeFlashcards(numberOfElements, flashcards, count);
};

export const addFlashcards = () => {
  const numberOfElements = parseInt(
    prompt("How many elements do you want to add?"),
  );
  return makeFlashcards(numberOfElements);
};
