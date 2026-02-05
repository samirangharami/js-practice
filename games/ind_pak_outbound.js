const blindGrid = [
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'],
];

console.log(blindGrid.join('\n'));

const safeWay = [
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, true, true, false],
  [false, true, true, false, false],
  [false, true, false, false, false],
]

const WEST = 'w';
const EAST = 'e';
const NORTH = 'n';
const SOUTH = 's';
let cuurentPosition = 0;
const positionSymbol = '🏃🏽‍♂️';

function startPosition() {
  const startingPosition = parseInt(prompt('Pick a position to start:'));

  switch (startingPosition) {
    case 1:
      cuurentPosition = '4, 0';
      blindGrid[4][0] = positionSymbol;
      break;
    case 2:
      cuurentPosition = '4, 1';
      blindGrid[4][1] = positionSymbol;
      break;
    case 3:
      cuurentPosition = '4, 2';
      blindGrid[4][2] = positionSymbol;
      break;
    case 4:
      cuurentPosition = '4, 3';
      blindGrid[4][3] = positionSymbol;
      break;
    case 4:
      cuurentPosition = '4, 4';
      blindGrid[4][4] = positionSymbol;
      break;
    default:
      console.log('Invalid input');
  }
}

startPosition();
console.log(blindGrid);