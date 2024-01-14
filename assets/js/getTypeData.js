const TYPE_URI = "https://pokeapi.co/api/v2/type/";
const getPokemonType = async (param) => {
  try {
    const data = await fetch(`${TYPE_URI}${param}`).then((res) => res.json());
    console.log("tipo", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
