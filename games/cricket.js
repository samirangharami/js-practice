let runs = 0;
const POSSIBLE_POSITIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const POSSIBLE_HITS = [1, 2, 3, 4, 5, 6];

console.log(`
  You are batting! Choose what you want to hit, then choose a position to hit the ball there.
  If a fielder is placed there, you are OUT!! Otherwise you get the runs.`);

for (let numberOfBalls = 1; true; numberOfBalls++) {
  const attempt = parseInt(prompt('\nWhat do you want to hit?'));

  if (!POSSIBLE_HITS.includes(attempt)) {
    console.log(`\nYou can only hit ${POSSIBLE_HITS}! Go learn basics!`);
    continue;
  }

  const max = maxPosibblePositionsToHit(attempt);
  console.log(displayInstruction(max));
  const fielderPosition = getRandomFielderPositions(1, max);

  const currentHit = getCurrentHit();


  if (!POSSIBLE_POSITIONS.includes(currentHit)) {
    console.log(`\nTold you between 1 & ${max}!! Isn't it?`);
    continue;
  }


  if (fielderPosition.includes(currentHit)) {
    console.log(`\nCaught at ${batsmanCaughtAt(currentHit)}!`);
    console.log(`\nYou scored: ${runs} runs`);
    break;
  } else {
    runs += attempt;
    console.log(`\nYou are on ${runs}*`);
  }
}

function batsmanCaughtAt(currentHit) {
  switch (currentHit) {
    case 1: return 'square leg';
    case 2: return 'deep square';
    case 3: return 'point';
    case 4: return 'cover';
    case 5: return 'extra cover';
    case 6: return 'long on';
    case 7: return 'long off';
    case 8: return 'mid wicket';
    case 9: return 'slip';
    case 10: return 'third man';
    case 11: return 'gully';
    case 12: return 'deep extra cover';
    case 13: return 'deep point';
    case 14: return 'deep mid wicket';
    case 15: return 'short fine leg';
    case 16: return 'fine leg';
    case 17: return 'short third man';
    case 18: return 'deep backward point';
    case 19: return 'leg slip';
    case 20: return 'mid on';
  }
}

function maxPosibblePositionsToHit(attempt) {
  switch (attempt) {
    case 1:
      return 20;
    case 2:
      return 19;
    case 3:
      return 18;
    case 4:
      return 17;
    case 5:
      return 16;
    case 6:
      return 15;
  }
}

function resultOfCurrentBall(fielderPosition, runs, currentHit, attempt) {

}

function getRandomFielderPositions(min, max, fielderPosition = []) {
  if (fielderPosition.length === 9) {
    return fielderPosition;
  }
  const nextFielderPosition = Math.floor(Math.random() * (max - min) + min);
  if (!fielderPosition.includes(nextFielderPosition)) {
    fielderPosition.push(nextFielderPosition);
  }

  return getRandomFielderPositions(min, max, fielderPosition);
}

function displayInstruction(max) {
  let instruction = `\nPlease choose between 1 & ${max}`;
  instruction += '\n' + '_'.repeat('Please choose between 1 & 15'.length);
  return instruction;
}

function getCurrentHit() {
  const currentHitAsString = prompt('\nChoose position to hit:');
  console.log('_'.repeat('Choose position to hit: '.length));
  const currentHit = parseInt(currentHitAsString);

  return currentHit;
}