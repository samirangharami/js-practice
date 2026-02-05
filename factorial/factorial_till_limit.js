let startingNumber = 0;
const limit = 14;

console.log("The limit is:" , limit);

if (limit < 0) {
    console.log("The entered limit is negative");
}

for (startingNumber ; startingNumber <= limit ; startingNumber++) {
    let factorial = 1;
    for (let multiplier = 1; multiplier <= startingNumber; multiplier++) {
        factorial = factorial *multiplier;
    }

    console.log("The factorial of" , startingNumber , ":" , factorial);
}