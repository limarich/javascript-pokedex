const SPECIES_URI = "https://pokeapi.co/api/v2/pokemon-species/";
const getPokemonSpecies = async (param) => {
  try {
    const data = await fetch(`${SPECIES_URI}${param}`).then((res) =>
      res.json()
    );
    console.log("descrição", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
