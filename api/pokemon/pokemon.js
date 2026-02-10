const boldAndUnderline = (text) => "\x1B[4m\x1B[1m" + text + "\x1B[0m";

const fetchPokemon = async (pokeId) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemon = await fetch(url + pokeId).then((x) => x.json());
  return pokemon;
};

const displaySummary = async (pokeSummary) => {
  for (const key in pokeSummary) {
    const detail = `${boldAndUnderline(key)}: ${pokeSummary[key]}\n`;
    await Deno.stdout.write(new TextEncoder().encode(detail));
  }
};

const extractDetail = (pokeDetails, field, detail, joiner) =>
  pokeDetails[field].map((x) => x[detail].name).join(joiner);

const extractStats = (pokeDetails) =>
  pokeDetails.stats.map((x) => `${x.stat.name}: ${x.base_stat}`).join(" | ");

const getSummary = (pokeDetails) => {
  const id = pokeDetails.id;
  const name = pokeDetails.name;
  const height = pokeDetails.height;
  const weight = pokeDetails.weight;
  const abilities = extractDetail(pokeDetails, "abilities", "ability", "|");
  const moves = extractDetail(pokeDetails, "moves", "move", ", ");
  const types = extractDetail(pokeDetails, "types", "type", "|");
  const stats = extractStats(pokeDetails);
  const summary = { id, name, height, weight, types, abilities, moves, stats };

  return summary;
};

const poke = async () => {
  const pokeId = prompt("Enter the name or id:");
  const pokemon = await fetchPokemon(pokeId);
  const pokeSummary = getSummary(pokemon);
  displaySummary(pokeSummary);
};

poke();
