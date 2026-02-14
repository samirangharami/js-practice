import { decode } from "jsr:@matmen/imagescript";

const ESC = "\x1b";
const ALL_ASCII =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.                      "
    .split("").reverse();

const colorASCII = (r, g, b, ASCII) =>
  `${ESC}[38;2;${r};${g};${b}m${ASCII}${ESC}[0m`;

const selectASCII = (brightness) => {
  const highestBrightness = 255;
  const scaledDownBrightness = brightness / highestBrightness;
  const index = Math.floor(scaledDownBrightness * (ALL_ASCII.length - 1));
  return ALL_ASCII[index];
};

const printImage = (height, width, bytes) => {
  const art = [];
  for (let row = 0; row < height; row += 1) {
    const imageRow = [];
    for (let column = 0; column < width; column += 1) {
      const index = (row * width + column) * 4;
      const r = bytes[index];
      const g = bytes[index + 1];
      const b = bytes[index + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      const ASCII = selectASCII(brightness);
      imageRow.push(colorASCII(r, g, b, ASCII));
    }
    art.push(...imageRow);
    art.push("\n");
  }
  console.log(art.join(""));
};

const main = async () => {
  const image = await Deno.readFile("./capybara.jpg");
  const decoded = await decode(image);
  printImage(decoded.height, decoded.width, decoded.bitmap);
};

main();
