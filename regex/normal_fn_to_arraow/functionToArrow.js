const functionTheOldWay = Deno.readTextFileSync("./count_words.js");
const regex = /function\s+(\w+)\s*(\([^\)]*\))\s*\{/g;
const arrowFunction = functionTheOldWay.replace(regex, "const \$1 = \$2 => {");

Deno.writeTextFileSync("./count_words.js", arrowFunction);
