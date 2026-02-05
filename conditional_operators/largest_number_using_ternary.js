const a = 2;
const b = 12;
const c =6;

let result = (a > b) ? ((a > c) ? a : c ) : ((b > c) ? b : c );

console.log("The largest number is:" , result);