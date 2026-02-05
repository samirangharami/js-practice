import { input } from "npm:@inquirer/prompts";
import { clearFlag, printFlag } from "./printAndClear.js";

const res = await Deno.readTextFile("./flags.json");
const allFlags = JSON.parse(res);

export const getNumberOfFlagsToPlay = async () => {
  const answer = await input({
    message: "Enter the number of flags you want:",
    required: true,
    prefill: 10,
  });
  return parseInt(answer);
};

const getRandomFlags = (number) => {
  const randomFlags = [];
  for (let index = 1; index <= number; index++) {
    const randomIndex = Math.round(Math.random() * (allFlags.length - 1));
    const flagDetails = allFlags.splice(randomIndex, 1)[0];
    randomFlags.push(flagDetails);
  }
  return randomFlags;
};

const isCorrectAnswer = async (flagDetails) => {
  const correctAnswers = flagDetails.names.map((x) => x.toLowerCase());
  const answer = await input({
    message: "Enter the Country's name:",
    required: true,
  });
  return correctAnswers.includes(answer.toLowerCase());
};

const showResult = (correct, total) => {
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

export const game = async (numberOfFlags) => {
  const flags = getRandomFlags(numberOfFlags);
  let correctAnswers = 0;
  while (flags.length > 0) {
    console.clear();
    const randomIndex = Math.round(Math.random() * (flags.length - 1));
    const flagDetails = flags.splice(randomIndex, 1)[0];
    await printFlag(flagDetails.flag);
    if (await isCorrectAnswer(flagDetails, randomIndex)) {
      console.log("\n%cCorrect answer", "color: green");
      correctAnswers++;
    } else {
      console.log("\n%cWrong answer", "color: red");
      console.log(
        `\nCORRECT ANSWER:- %c${flagDetails.names.join(" or ")}`,
        "color: yellow",
      );
    }
    prompt("\nEnter to continue ⏎");
    clearFlag();
  }
  console.clear();
  showResult(correctAnswers, numberOfFlags);
};
