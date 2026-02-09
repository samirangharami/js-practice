export const showResult = (correct, total) => {
  const accuracy = Math.round((correct / total) * 100);

  console.log("\n══════════════════════");
  console.log("   🎯  GAME OVER");
  console.log("══════════════════════\n");

  console.log(`Correct answers : ${correct} / ${total}`);
  console.log(`Accuracy        : ${accuracy}%\n`);

  if (accuracy >= 80) {
    console.log("🔥 Excellent! You really know your flags.");
  } else if (accuracy >= 50) {
    console.log("👍 Good job! A bit more practice and you’ll ace it.");
  } else {
    console.log("💪 Keep going! You’ll improve with practice.");
  }
};

export const showCorrectAnswers = (answers) =>
  console.log(`\nCORRECT ANSWERS:- %c${answers.join(" or ")}`, "color: yellow");

export const displayFeedback = (isCorrect) => {
  const msg = isCorrect ? "Correct answer" : "Wrong answer";
  const color = isCorrect ? "green" : "red";
  console.log(`\n%c${msg}`, `color: ${color}`);
};
