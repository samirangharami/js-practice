const ESC = "\x1b";

export const printFlag = async (flagUrl, flagId) => {
  const res = await fetch(flagUrl);
  const buffer = await res.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  const flag = btoa(binary);
  const flagWithEsc = `${ESC}_Gq=2,i=${flagId},a=T,f=100;${flag}${ESC}\\`;
  console.log(flagWithEsc);
};

export const clearFlag = (flagId) => {
  console.log(`${ESC}_Ga=d,i=${flagId}${ESC}\\`);
};
