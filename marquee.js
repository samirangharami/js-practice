const screen = [];
for (let i = 0; i <= 4; i++) {
  screen.push(" ".repeat(15).split(""));
}

const drawOnScreen = (screen, { x, y, text }) => {
  for (const char of text) {
    x = (screen[y].length + x) % screen[y].length;
    screen[y][x] = char;
    x = (x + 1) % screen[y].length;
  }
};

const clearScreen = (screen) => {
  for (const rows in screen) {
    for (const cols in screen[rows]) {
      screen[rows][cols] = " ";
    }
  }
};

const displayScreen = (screen) => {
  for (const rows of screen) {
    console.log(rows.join(""));
  }
};

const words = [
  { text: "hello", x: 0, y: 0, dx: 1 },
  { text: "everyone", x: 0, y: 1, dx: -1 },
  { text: "world", x: 0, y: 2, dx: 2 },
  { text: "marquee", x: 0, y: 3, dx: -1 },
  { text: "verticle", x: 0, y: 4, dx: 1 },
];

setInterval(() => {
  console.clear();
  clearScreen(screen);

  words.forEach((word) => {
    drawOnScreen(screen, word);
    word.x = (word.x + word.dx) % 15;
  });

  displayScreen(screen);
}, 90);
