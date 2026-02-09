import { input } from "npm:@inquirer/prompts";
import { levenshteinDistance } from "jsr:@std/text/levenshtein-distance";
import { clearFlag, printFlag } from "./printAndClear.js";
import {
  displayFeedback,
  showCorrectAnswers,
  showResult,
} from "./display_utils.js";
import { Score } from "./score.js";

const res = await Deno.readTextFile("./flags.json");
const allFlags = JSON.parse(res);

export const getNumberOfFlagsToPlay = async () => {
  const validate = (string) =>
    Number(string) <= allFlags.length || `Max limit: ${allFlags.length}`;

  const answer = await input({
    message: "Enter the number of flags you want:",
    required: true,
    default: 10,
    validate,
  });
  return Number(answer);
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

  return correctAnswers.some((correctAnswer) => {
    const ld = levenshteinDistance(correctAnswer, answer);
    const threshold = Math.round((ld / correctAnswer.length) * 100);
    return threshold <= 20;
  });
};

const validateAnswer = async (flagDetails, score) => {
  const isCorrect = await isCorrectAnswer(flagDetails);
  displayFeedback(isCorrect);
  score.update(isCorrect);
};

export const game = async (numberOfFlags) => {
  const flags = getRandomFlags(numberOfFlags);
  const score = new Score();
  for (const flagDetails of flags) {
    console.clear();
    await printFlag(flagDetails.flag);
    await validateAnswer(flagDetails, score);
    showCorrectAnswers(flagDetails.names);
    prompt("\nEnter to continue ⏎");
    clearFlag();
  }
  console.clear();
  showResult(score.correct, numberOfFlags);
};
