const flat = (arr, depth = 1, intialValue = []) => {
  const flatened = intialValue;
  
  for (const element of arr) {
    addToSet(element, depth, flatened);
  }

  return flatened;
};

const addToSet = (elementToAdd, depth, acc) => {
  return Array.isArray(elementToAdd) && depth > 0
    ? flat(elementToAdd, depth - 1, acc)
    : acc.push(elementToAdd);
};

const flatMap = (arr, mapper) => flat(map(arr, mapper));

const map = function (array, mapper) {
  const mapped = [];

  for (let index = 0; index < array.length; index++) {
    const currentElement = mapper(array[index]);
    mapped.push(currentElement);
  }

  return mapped;
};

console.log(
  flatMap([["a", ["b"]], ["c"], "d", ["efg"], "hi", ["jk", "l", "m"]], (x) => x)
);
