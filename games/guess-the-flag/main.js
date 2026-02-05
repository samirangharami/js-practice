import { game, getNumberOfFlagsToPlay } from "./src/guessTheFlag.js";

const main = async () => {
  const numberOfFlags = await getNumberOfFlagsToPlay();
  await game(numberOfFlags);
};

await main();
