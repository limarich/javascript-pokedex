const BASE_URI = "https://pokeapi.co/api/v2/pokemon";
let LIMIT = 80;

let offset = 0;

const getPokedexData = async (limit = 10, offset = 0) => {
  try {
    const pokedex = await fetch(`${BASE_URI}?limit=${limit}&offset=${offset}`)
      .then((data) => data.json())
      .then((res) => res.results);
    await getPokemonData(pokedex);
  } catch (err) {
    console.error(err);
  }
};

getPokedexData(LIMIT, 0);
