import { input } from "npm:@inquirer/prompts";
import { levenshteinDistance } from "jsr:@std/text/levenshtein-distance";
import { clearFlag, printFlag } from "./printAndClear.js";
import { showCorrectAnswers, showResult } from "./display.js";

const res = await Deno.readTextFile("./flags.json");
const allFlags = JSON.parse(res);

export const getNumberOfFlagsToPlay = async () => {
  const answer = await input({
    message: "Enter the number of flags you want:",
    required: true,
    default: 10,
    validate: (string) =>
      Number(string) <= allFlags.length
        ? true
        : `Max limit: ${allFlags.length}`,
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

  return correctAnswers.some(
    (correctAnswer) => {
      const ld = levenshteinDistance(correctAnswer, answer);
      const threshold = Math.round((ld / correctAnswer.length) * 100);
      return threshold <= 20;
    },
  );
};

export const game = async (numberOfFlags) => {
  const flags = getRandomFlags(numberOfFlags);
  let correctAnswers = 0;
  for (const flagDetails of flags) {
    console.clear();
    await printFlag(flagDetails.flag);
    if (await isCorrectAnswer(flagDetails)) {
      console.log("\n%cCorrect answer", "color: green");
      showCorrectAnswers(flagDetails.names);
      correctAnswers++;
    } else {
      console.log("\n%cWrong answer", "color: red");
      showCorrectAnswers(flagDetails.names);
    }
    prompt("\nEnter to continue ⏎");
    clearFlag();
  }
  console.clear();
  showResult(correctAnswers, numberOfFlags);
};
