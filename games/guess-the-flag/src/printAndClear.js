const ESC = "\x1b";

export const printFlag = async (flagUrl) => {
  const res = await fetch(flagUrl);
  const buffer = await res.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const binary = String.fromCharCode(...bytes);
  const flag = btoa(binary);
  const flagWithEsc = `${ESC}_Gq=2,a=T,f=100;${flag}${ESC}\\`;
  await Deno.stdout.write(new TextEncoder().encode(flagWithEsc + "\n"));
};

export const clearFlag = async () => {
  await Deno.stdout.write(new TextEncoder().encode(`${ESC}[2J${ESC}[H`));
};
