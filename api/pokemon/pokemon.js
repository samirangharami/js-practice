const fetchPokemon = async (pokeId) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemon = await fetch(url + pokeId).then((x) => x.json());
  return pokemon;
};

const formatPokeSummary = (pokeSummary) => {
  const formatted = `
  
   ${underline(bold("Id"))}: ${pokeSummary.id}
   ${underline(bold("Name"))}: ${pokeSummary.name}
   ${underline(bold("Height"))}: ${pokeSummary.height}
   ${underline(bold("Weight"))}: ${pokeSummary.weight}
   ${underline(bold("Types"))}: ${pokeSummary.types}
   ${underline(bold("Abilities"))}: ${pokeSummary.abilities}
   ${underline(bold("Stats"))}: ${pokeSummary.baseStats}
   ${underline(bold("Moves"))}: ${pokeSummary.moves}
   `;

  return formatted;
};

const getAbilities = (pokeDetails) =>
  pokeDetails.abilities.map((x) => x.ability.name).join(" | ");
const getMoves = (pokeDetails) =>
  pokeDetails.moves.map((x) => x.move.name).join(", ");
const getBaseStats = (pokeDetails) =>
  pokeDetails.stats.map((x) => `${x.stat.name}: ${x.base_stat}`).join(" | ");
const getTypes = (pokeDetails) =>
  pokeDetails.types.map((x) => x.type.name).join(" | ");

const getSummary = (pokeDetails) => {
  const id = pokeDetails.id;
  const name = pokeDetails.name;
  const height = pokeDetails.height;
  const weight = pokeDetails.weight;
  const abilities = getAbilities(pokeDetails);
  const moves = getMoves(pokeDetails);
  const baseStats = getBaseStats(pokeDetails);
  const types = getTypes(pokeDetails);
  const pokeSummary = {
    id,
    name,
    height,
    weight,
    types,
    abilities,
    moves,
    baseStats,
  };
  return formatPokeSummary(pokeSummary);
};

const poke = async () => {
  const pokeId = prompt("Enter the name or id:");
  const pokemon = await fetchPokemon(pokeId);
  const pokeSummary = getSummary(pokemon);
  console.log(pokeSummary);
};

poke();

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}
