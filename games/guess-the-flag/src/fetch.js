const url = "https://restcountries.com/v3.1/all?fields=name,flags";
const response = (await fetch(url)).json();
const json = await response;
const data = json.map((x) => ({
  flag: x.flags.png,
  names: [x.name.common, x.name.official],
}));
console.log(JSON.stringify(data, null, 2));
