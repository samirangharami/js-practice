const log = (content, option = "") => console.log(content, option);

const drawLines = () => log("\n══════════════════════");

export const showResult = (score) => {
  const accuracy = score.accuracy();

  drawLines();
  log("   🎯  GAME OVER");
  drawLines();
  log(`Correct answers : ${score.correct} / ${score.totalQuestions()}`);
  log(`Accuracy        : ${accuracy}%\n`);

  if (accuracy >= 80) {
    log("🔥 Excellent! You really know your flags.");
  } else if (accuracy >= 50) {
    log("👍 Good job! A bit more practice and you’ll ace it.");
  } else {
    log("💪 Keep going! You’ll improve with practice.");
  }
};

export const showAnswers = (answers) =>
  log(`\nCORRECT ANSWERS:- %c${answers.join(" or ")}`, "color: yellow");

export const displayFeedback = (isCorrect) => {
  const feedback = isCorrect
    ? { msg: "Correct answer", color: "green" }
    : { msg: "Wrong answer", color: "red" };

  log(`\n%c${feedback.msg}`, `color: ${feedback.color}`);
};
