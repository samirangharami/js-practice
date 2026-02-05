const isEven = (evenCandidate) => !(evenCandidate & 1);

const isPrime = (number) => {
  if (number <= 1) return false;
  if (isEven(number) && number > 2) return false;

  const limit = Math.floor(Math.sqrt(number));

  for (let currNumber = 3; currNumber < limit; currNumber += 2) {
    if (currNumber % number === 0) return false;
  }

  return true;
};

function* generator(startOfRange, endOfRange) {
  for (let currNumber = startOfRange; currNumber <= endOfRange; currNumber++) {
    if (isPrime(currNumber)) yield currNumber;
  }
}

const startOfRange = 0;
const endOfRange = 100;
const evens = generator(startOfRange, endOfRange);

console.log([...evens]);
