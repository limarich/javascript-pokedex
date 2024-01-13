const BASE_URI = "https://pokeapi.co/api/v2/pokemon";
let LIMIT = 10;

let offset = 0;

const getPokedexData = async (limit = 10, offset = 0) => {
  try {
    const pokedex = await fetch(`${BASE_URI}?limit=${limit}&offset=${offset}`)
      .then((data) => data.json())
      .then((res) => res.results);
    await getPokemonData(pokedex);
  } catch (err) {
    console.error(err);
    // ideia de adicionar um popup informando problema no get de dados
  } finally {
    // mostrar o loading
    // ideia de implementar um skeleton de {limit} elementos enquanto carregam os novos dados
  }
};

// getPokedexData();
