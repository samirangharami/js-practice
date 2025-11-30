const screen = [];
for (let i = 0; i <= 20; i++) {
  screen.push(" ".repeat(20).split(""));
}

const drawOnScreenVerticle = (screen, { x, y, text }) => {
  for (const char of text) {
    y = (screen.length + y) % screen.length;
    const colToAddChar = x + Math.round(Math.random());
    screen[y][colToAddChar] = char;
    y = (y + 1) % screen.length;
  }
};

const drawOnScreenHorizontal = (screen, { x, y, text }) => {
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
  { text: "hello", x: 0, y: 0, dx: 1, move: "h" },
  { text: "everyone", x: 10, y: 0, dx: 1, move: "v" },
  { text: "world", x: 0, y: 10, dx: -1, move: "h" },
  { text: "marquee", x: 20, y: 0, dx: -1, move: "v" },
  { text: "verticle", x: 0, y: 20, dx: 1, move: "h" },
];

setInterval(() => {
  console.clear();
  clearScreen(screen);

  words.forEach((word) => {
    if (word.move === "h") {
      drawOnScreenHorizontal(screen, word);
      word.x = (word.x + word.dx) % screen[0].length;
    } else {
      drawOnScreenVerticle(screen, word);
      word.y = (word.y + word.dx) % screen.length;
    }
  });

  displayScreen(screen);
}, 120);
