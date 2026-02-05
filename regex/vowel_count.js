const word = "amazing idea";
const regex = /[aeiou]/g;

const count = word.match(regex).length;

console.log(count);
