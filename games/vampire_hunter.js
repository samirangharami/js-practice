let equipmentBag = ['🗡️', '🪥', '🔦', '🧛🏽‍♂️', '🎁', '🥊', '🔑', '🪑'];
const room1 = [];
const room2 = [];
const room3 = [];
const room4 = [];
const room5 = [];
const room6 = [];
const room7 = [];
const room8 = [];
const corridor = [room1, room2, room3, room4, room5, room6, room7, room8];
const POSSIBLE_ROOMS_TO_ENTER = '1, 2, 3, 4, 5, 6, 7, 8';
let index = 0;

console.log(`
${underline(bold('Game Details:'))}

${green('1️⃣ There are 7 rooms here. Every room hides something for you, maybe be useful or deadly!')}

${green('2️⃣ You hold 3 items at a time in your hands and pocket.')}

${green('3️⃣ You can kill the vampire only if you the necessary items or else he kills you!')}
     
${red('See at the end of the game either with a congrats message or with coffin.')}

${bold(yellow('GOOD LUCK!'))}
  `);

function removeEquipmentFromBag(equipments, equipment) {
  for (let index = 0; index < equipments.length; index++) {
    if (equipments[index] === equipment) {
      equipments[index] = equipments[equipments.length - 1];

    }
  }
  equipments.pop();
  return equipments;
}

function equipmentSorter(index) {
  while (index < 8) {
    const equipmentToStore = equipmentBag[Math.floor(Math.random() * (equipmentBag.length - 1))];
    corridor[index].push(equipmentToStore);
    equipmentBag = removeEquipmentFromBag(equipmentBag, equipmentToStore);
    index++;
  }

  return corridor;
}

function printGrid(val) {
  const line = "─".repeat(22);
  console.log(`\t\t${line}`);

  for (let i = 0; i < 9; i += 3) {

    console.log("\t\t│      │      │      │")
    switch (i) {
      case 0:
        console.log(`\t\t│  ${dim(i + 1)}${val[i]} │  ${dim(i + 2)}${val[i + 1]} │  ${dim(i + 3)}${val[i + 2]} │`);
        break;
      case 3:
        console.log(`\t\t│  ${dim(i + 1)}${val[i]} │  ${val[i + 1]}  │  ${dim(i + 2)}${val[i + 2]} │`);
        break;
      case 6:
        console.log(`\t\t│  ${dim(i)}${val[i]} │  ${dim(i + 1)}${val[i + 1]} │  ${dim(i + 2)}${val[i + 2]} │`);

    }
    console.log(`\t\t${line}`);
  }
}

function roomEntries(corridorWithEquipments) {
  console.log('_'.repeat(127));
  const grid = ['🚪', '🚪', '🚪', '🚪', '🧍🏽‍♂️', '🚪', '🚪', '🚪', '🚪'];

  printGrid(grid);
  const entry = parseInt(prompt('\nWhich room do you want to enter?'));
  if (!POSSIBLE_ROOMS_TO_ENTER.includes(entry)) {
    console.clear();
    console.log('\nRoom number not found!');
    return roomEntries(corridorWithEquipments);
  }
  console.log(entry);

  grid[entry - 1] = '🧍🏽‍♂️';
  grid[4] = '  ';
  console.clear();
  printGrid(grid);
  return actionInRoom(entry - 1, equipmentsInHand);
}

function vampireRoom() {
  for (let roomIndex = 0; roomIndex < 7; roomIndex++) {
    if (corridor[roomIndex].includes('🧛🏽‍♂️')) {
      return roomIndex + 1;
    }
  }
  return vampireRoom();
}

let corridorWithEquipments = equipmentSorter(index);
const VampireRoom = vampireRoom();
const equipmentsInHand = [];
roomEntries(corridorWithEquipments);

function actionInRoom(roomNumber, equipmentsInHand) {
  console.log('_'.repeat(127));
  if ((roomNumber + 1) === VampireRoom) {
    return actionInVampireRoom(equipmentsInHand);
  }

  if (corridor[roomNumber][0] === '') {
    return emptyRoom();
  }

  console.log(`\nThere is a ${corridorWithEquipments[roomNumber][0]} in this room`);
  let toTake = confirm(`\nTake the ${corridorWithEquipments[roomNumber][0]} ?`);
  if (equipmentsInHand.length === 3 && toTake) {
    console.log(`
      If you pick this ${corridorWithEquipments[roomNumber][0]}, you have to leave the ${corridorWithEquipments[0]} in this room`);
    toTake = confirm(`
      I am asking again, Do you want to take ${corridorWithEquipments[roomNumber][0]}?`)
  }

  if (equipmentsInHand.length === 3 && toTake) {
    equipmentsInHand.shift();
  }

  if (toTake) {
    equipmentsInHand.push(corridorWithEquipments[roomNumber][0]);
    corridorWithEquipments[roomNumber][0] = '';
  } else {
    console.log(`\nYou left the ${corridorWithEquipments[roomNumber][0]} in this room`);
  }

  const toLeave = confirm('\nDo you want to leave this room?');
  if (toLeave) {
    return toLeaveRoom(corridorWithEquipments);
  } else {
    return actionInRoom(roomNumber, equipmentsInHand);
  }
}

function emptyRoom(corridorWithEquipments) {
  console.log('This room is empty');
  return toLeaveRoom(corridorWithEquipments);
}

function toLeaveRoom(corridorWithEquipments) {
  console.clear();
  return roomEntries(corridorWithEquipments);
}

function actionInVampireRoom(equipmentsInHand) {
  const isDaggerInHand = isequipmentInHand('🗡️');
  const isTorchInHand = isequipmentInHand('🔦');

  if (isDaggerInHand && isTorchInHand) {
    console.log(`
The 🧛🏽‍♂️ approaches towards you screaming with stretched arms and sharp canines.
You turn on the 🔦 and and point it at his eyes, he gets blind.
You stuck the 🗡️ in his chest. He screams and collapses on the ground.
      
${green('Congrats you leave the room alive!🎉')}`);
  } else {
    return deathScreen(equipmentsInHand);
  }
}

function isequipmentInHand(equipment) {
  for (let handIndex = 0; handIndex < 3; handIndex++) {
    if (equipmentsInHand[handIndex] === equipment) {
      return true;
    }
  }
  return false;
}

function deathScreen(equipmentsInHand) {
  const numberOfEquipmentsInHand = equipmentsInHand.length;

  if (numberOfEquipmentsInHand < 2) {
    deathMessage = `\nThis ${equipmentsInHand} is not enough to kill vampire`;
  } else {
    deathMessage = `\nThese ${equipmentsInHand} are not enough to kill vampire`;
  }

  console.log(deathMessage);
  console.log(`
The 🧛🏽‍♂️ runs towards you. He stucks his sharp canines on your neck. You collapse on the floor, and ...
${red('You DIE! 🩸💀')}`);
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function yellow(text) {
  return "\x1B[33m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}

function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function dim(text) {
  return "\x1B[2m" + text + "\x1B[0m";
}
