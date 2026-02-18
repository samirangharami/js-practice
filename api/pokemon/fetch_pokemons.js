const extractStats = (pokeDetails) =>
  pokeDetails.stats.map((x) => `${x.stat.name}: ${x.base_stat}`);

const getSummary = (pokeDetails) => {
  const id = pokeDetails.id;
  const name = pokeDetails.name;
  const weight = pokeDetails.weight;
  const types = pokeDetails.types.map((x) => x.type.name);
  const base_xp = pokeDetails.base_experience;
  const stats = extractStats(pokeDetails);
  const image = pokeDetails.sprites.other["official-artwork"].front_default;
  const summary = { id, name, base_xp, weight, types, stats, image };

  return summary;
};

const fetchPokemon = async (pokeId) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemon = await fetch(url + pokeId).then((x) => x.json());
  return getSummary(pokemon);
};

const fetchPokes = async () => {
  const pokemons = {};

  for (let id = 1; id <= 1025; id++) {
    const poke = await fetchPokemon(id);
    pokemons[poke.name] = poke;
  }
  return pokemons;
};

const allPokes = await fetchPokes();

Deno.writeTextFileSync("./pokemons.json", JSON.stringify(allPokes, null, 2));
