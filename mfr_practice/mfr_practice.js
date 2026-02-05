const PROBLEMS = [
  ["red", "blue", "red", "green", "red", "blue"],
  [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]],
  ["sparrow", "crow", "sparrow", "eagle", "crow"],
  [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]],
  [[5, 3], [2], [4, 1]],
  [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
  [[22, 23], [25, 24, 22], [29]],
  [[2, 3, 2], [4], [1, 1]],
  [["blue", "yellow"], ["yellow", "green"], ["blue"]],
  ["Dune", "Dune", "Foundation", "Dune"],
  [["rice", "lentils"], ["rice"], ["curd", "lentils"]],
  [["la", "la"], ["mi"], ["so", "la"]],
  [[4, 6], [2, 3, 1], [5]],
  ["small", "large", "medium", "small"],
  ["deer", "deer", "rabbit", "deer"],
  [[1, 2], [3], [2, 4, 1]],
  [["step", "tap"], ["turn", "step"]],
  [[1, 2, 1], [3], [2]],
  [[3, 2], [1], [4]],
  [["apple", "banana"], ["apple"], ["apple", "orange"]],
  [[2, 3], [1], [3, 2]],
  [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]],
  ["A", "B", "A", "C", "B"],
  [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]],
  [["rose", "lily"], ["lily", "tulip"]],
  [[10, 20], [5], [15, 10]],
  [["A", "B"], ["B", "C"], ["A"]],
  [[12, 10], [5], [8, 7]],
  [[3, 4], [5, 2], [1]],
  [[4, 3], [2], [3, 1]]
]

const count = (data, elementToCount) => {
  return data.reduce((acc, currentElement) => {
    return isToBeCounted(elementToCount, currentElement) ? acc + 1 : acc;
  }, 0);
}

const deepCount = (data, elementToCount) => {
  return (data.flatMap(x => x)).reduce((acc, currentElement) => {
    return isToBeCounted(elementToCount, currentElement) ? acc + 1 : acc;
  }, 0);
}

const isToBeCounted = (ideal, toBeChecked) => ideal === toBeChecked;

const combineObservation = (data) => {
  return data.flatMap((x) => x);
}

const duplicateRemover = (data) => {
  return data.reduce((acc, currentElement) => {
    return acc.includes(currentElement) ? acc : acc.concat(currentElement);
  }, [])
}

const deepDuplicateRemover = (data) => {
  return duplicateRemover(data.flatMap((x) => x));
}

const addElements = (data) => {
  return (data.flatMap((x) => x)).reduce((acc, currentElement) => acc + currentElement, 0);
}

const ifSome = (data, elementToLookFor) => {
  return (data.flatMap((x) => x)).some((currentElement) => currentElement === elementToLookFor);
}

const ifEvery = (data, rangeStart, rangeEnd) => {
  return (data.flatMap((x) => x)).every((currentElement) =>  currentElement >= rangeStart && currentElement <= rangeEnd);
}

console.log('count Blue:', count(PROBLEMS[0], 'blue')); //They want to know how many blue ribbons were cut.
console.log('combine Observation:', combineObservation(PROBLEMS[1])); //Combine everyone’s observations into one list of all constellations spotted.
console.log('dublicate Remover:', duplicateRemover(PROBLEMS[2])); //Create a list of the species without repeats, preserving the order first seen.
console.log('classroom Attendance Check:', deepDuplicateRemover(PROBLEMS[3])); //Determine which distinct students attended at least once.
console.log('Candy Stocking:', addElements(PROBLEMS[4])); //Find the total number of candies added.
console.log('Music Rehersal:', ifSome(PROBLEMS[5], 'do')); //Check whether any group sang "do".
console.log('Weather Sensor:', ifEvery(PROBLEMS[6], -Infinity, 31)); //Check if every recorded temperature is below 32.
console.log('Fitness Tracker:', addElements(PROBLEMS[7])); //Find the total miles run.
console.log('art workshop:', deepDuplicateRemover(PROBLEMS[8])); //Find unique colors used.
console.log('library counter:', count(PROBLEMS[9], 'Dune')); //Count how many times “Dune” was returned.
console.log('lunchbox:', deepDuplicateRemover(PROBLEMS[10])); //Produce a list of distinct ingredients.
console.log('choir harmony:', ifSome(PROBLEMS[11], 'so')); //Check whether any group sang "so".
console.log('veg crate:', addElements(PROBLEMS[12])); //Find the sum of all weights.
console.log('parcel size:', duplicateRemover(PROBLEMS[13])); //Find unique parcel sizes.
console.log('wildlife sighting:', count(PROBLEMS[14], 'deer')); //Count how many times “deer” was seen.
console.log('chapter completion:', deepDuplicateRemover(PROBLEMS[15])); //Find all chapters completed by any group.
console.log('dance class:', ifSome(PROBLEMS[16], 'turn')); //Check if "turn" appears in any sequence.
console.log('garden watering:', addElements(PROBLEMS[17])); //Total amount of water used.
console.log('paper crane:', addElements(PROBLEMS[18])); //Compute the total cranes.
console.log('fruit basket:', deepDuplicateRemover(PROBLEMS[19])); //List unique fruits used.
console.log('pen distribution:', addElements(PROBLEMS[20])); //Total pens handed out.
console.log('movie marathon:', deepDuplicateRemover(PROBLEMS[21])); //List unique titles watched.
console.log('student name badge:', duplicateRemover(PROBLEMS[22])); //Create a unique list of attendees.
console.log('ice cream order:', deepCount(PROBLEMS[23], 'chocolate')); //Find how many orders were "chocolate".
console.log('flower:', deepDuplicateRemover(PROBLEMS[24])); //List all unique flowers used.
console.log('exercise repetitions:', addElements(PROBLEMS[25])); //Total repetitions done.
console.log('train stations:', deepDuplicateRemover(PROBLEMS[26])); //Find the station names without repeats.
console.log('book pages:', addElements(PROBLEMS[27])); //Find total pages read.
console.log('rainfall data:', ifEvery(PROBLEMS[28], 1, Infinity)); //Check if all values are positive.
console.log('fruit weight:', addElements(PROBLEMS[29])); //Compute total weight.