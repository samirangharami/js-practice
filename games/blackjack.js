console.log(`
                        ${bold(bgYellow(red('WELCOME TO BLACKJACK 🃏')))}

    ${bold(bgYellow(magenta('Rules:')))}
    
    1️⃣ ${underline('You and a dealer are facing against each other')}.

    2️⃣ ${underline('You aim is to get more card value than the dealer. But if you surprass 21 you LOSE!')}!

    3️⃣ ${underline('Card values:')} i) 2 - 10 will be their face values.
                   ii) 'Joker', 'Queen' and 'King' is 10.
                  iii) 'A' is either 10 or 1 depending on the situation.

    4️⃣ ${underline('Two cards will be dealt to each of you in the begining')}.

    5️⃣ ${underline('both of your cards will be face revealed at once but the dealer will reveal only one of his card')}.
       ${underline('The dealer reveals his card before you though')}.

    6️⃣ ${underline('After revealing you card you will see your current card value, now you can decide to take a card(HIT) or not.')}

    7️⃣ ${underline('Then the dealer reveals his 2nd card')}.
       ${underline("Now if his card's value is under 17, he is bound to take a card. Else he will have to stay with what he has")}.
       
       
       GOOD LUCK!`);

prompt('\n\t\t\t\t\tPress enter to continue ↩️');
console.clear();

const POSSIBLE_CARDS_TO_DRAW = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const POSSIBLE_CARD_SYBMOLS = ['♠️', '♥️', '♣️', '♦️'];
let dealerHand = 0;
let playerHand = 0;
let dealings = 0;
let dealerCardNumber = 0;
let playerCardNumber = 0;

function dealerCardDealing(round) {
  dealerCardNumber += 1;
  const CurrentDealerCard = POSSIBLE_CARDS_TO_DRAW[Math.floor(Math.random() * 13)];
  const currentCardSymbol = POSSIBLE_CARD_SYBMOLS[Math.floor(Math.random() * 4)];
  let currentCardValue = CurrentDealerCard;
  prompt(`\nDealer is about to reveal his card number ${dealerCardNumber}. Press enter to continue ↩️`);

  console.log(`\nDealer got ${currentCardValue} of ${currentCardSymbol}`);

  if (CurrentDealerCard === 'A') {
    currentCardValue = dealerHand > 11 ? 1 : 10;
  } else if (CurrentDealerCard === 'J' || CurrentDealerCard === 'Q' || CurrentDealerCard === 'K') {
    currentCardValue = 10;
  }

  dealerHand += currentCardValue;


  if (round === 1) {
    return dealerHand;
  }

  if (dealerHand > 21) {
    console.log(`\n${bold(blink(bgGreen('Dealer busted, You WIN! 🤑💰')))}`);
    return dealerHand;
  }

  if (dealerHand < 17) {
    console.log(`\n${underline('dealer:')} ${dealerHand}`);
    return dealerCardDealing();
  }

  return dealerHand;
}

function playerCardDealing(dealings) {
  playerCardNumber += 1;
  dealings += 1;
  const CurrentPlayerCard = POSSIBLE_CARDS_TO_DRAW[Math.floor(Math.random() * 13)];
  const currentCardSymbol = POSSIBLE_CARD_SYBMOLS[Math.floor(Math.random() * 4)];
  let currentCardValue = CurrentPlayerCard;
  prompt(`\nReveal you card number ${playerCardNumber}. Press enter to continue ↩️`);

  console.log(`\nYou got ${currentCardValue} of ${currentCardSymbol}`);

  if (CurrentPlayerCard === 'A') {
    currentCardValue = playerHand > 11 ? 1 : 10;
  } else if (CurrentPlayerCard === 'J' || CurrentPlayerCard === 'Q' || CurrentPlayerCard === 'K') {
    currentCardValue = 10;
  }

  playerHand += currentCardValue;
  console.log(`\n${underline('player:')} ${playerHand}`);

  if (dealings === 1) {
    return playerCardDealing(dealings);
  }

  if (playerHand > 21) {
    console.log(`\n${bold(blink(bgRed('You busted! 💥😭')))}`);
    return playerHand;
  }

  const ifToHit = confirm('\nDo you want hit?');
  if (ifToHit) {
    console.clear();
    return playerCardDealing(dealings);
  }
  return playerHand;
}

function play() {
  console.log(`\n ${underline('dealer:')} ${dealerCardDealing(1)}`);
  const playerHandAtEnd = playerCardDealing(dealings);
  if (playerHandAtEnd > 21) {
    return endHandValues();
  }
  console.log(`\n ${underline('dealer:')} ${dealerCardDealing(2)}`);
  const loseMsg = `\n${bold(blink(bgRed('You lose!')))}`;
  const winMsg = `\n${bold(blink(bgGreen('You win!')))}`;
  const result = (dealerHand > playerHand && dealerHand < 22) ? loseMsg : winMsg;
  console.log(result);
  return endHandValues();
}
x
play();

function endHandValues() {
  console.log(`\n${bgYellow('player at end:')} ${playerHand}`);
  console.log(`\n${bgYellow('dealer at end:')} ${dealerHand}\n`);
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}
function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}
function blink(text) {
  return "\x1B[5m" + text + "\x1B[0m";
}
function bgRed(text) {
  return "\x1B[41m" + text + "\x1B[0m";
}
function bgGreen(text) {
  return "\x1B[42m" + text + "\x1B[0m";
}
function bgYellow(text) {
  return "\x1B[43m" + text + "\x1B[0m";
}
function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
function magenta(text) {
  return "\x1B[35m" + text + "\x1B[0m";
}
