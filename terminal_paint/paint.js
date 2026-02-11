Deno.stdin.setRaw(true);

const ESC = "\x1b";
const encoder = new TextEncoder();
const decoder = new TextDecoder();

await Deno.stdout.write(encoder.encode(`${ESC}[?1002h`));
await Deno.stdout.write(encoder.encode(`${ESC}[?1006h`));

for await (const chunk of Deno.stdin.readable) {
  if (chunk[0] === 3) break;
  const coordinates = chunk.slice(chunk.indexOf(59) + 1, chunk.length - 1);
  const [x, y] = decoder.decode(coordinates).split(";");
  const painting = encoder.encode(`${ESC}[${y};${x};H${ESC}[41m ${ESC}[0m`);
  Deno.stdout.write(painting);
}

await Deno.stdout.write(encoder.encode(`${ESC}[?1002l${ESC}[?1006l`));
