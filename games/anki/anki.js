console.log(`WELCOME TO ANKI
            -----------------
  Menu:-
  ------
  1: Play flashcards
  2: View all flashcards
  3: Add flashcards`);

const league = JSON.parse(await Deno.readTextFile("./flashcards.json"));

const generateRandomIndex = (max) => Math.round(Math.random() * max);
const drawLine = () => console.log("-".repeat(25));

const anki = (flashcards) => {
  if (flashcards.length === 0) return "Flashcards completed";
  const cardNumber = generateRandomIndex(flashcards.length - 1);
  const answer = prompt(`${flashcards[cardNumber].front}:`);
  drawLine();

  if (flashcards[cardNumber].back === answer) {
    console.log("Correct answer");
    if (confirm("Was it easy?")) flashcards.splice(cardNumber, 1);
  } else console.log("Wrong answer");

  drawLine();
  return anki(flashcards);
};

console.log(anki(league.capitals));
