let numberOfTimes = 0;

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      numberOfTimes++;
      if (sortedData[i] < sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return numberOfTimes;
}

function generateRandomNumber(lowerLimit, upperLimit) {
  return lowerLimit + Math.floor(Math.random() * (upperLimit - lowerLimit));
}

function generateRandomData(totalElements) {
  const data = [];
  const lowerLimit = 0;
  const upperLimit = 1000;
  for (let index = 0; index < totalElements; index++) {
    data.push(generateRandomNumber(lowerLimit, upperLimit));
  }

  return data;
}

function checkBenchmark(args){
  const totalElements = args[0] || 10;
  const data = generateRandomData(totalElements);
  const benchmark = sort(data);

  console.log(benchmark);
}

checkBenchmark(Deno.args);
