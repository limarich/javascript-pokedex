const getPokemonByIdOrName = async (param) => {
  try {
    const data = await fetch(`${BASE_URI}/${param}`).then((res) => res.json());
    return data;
  } catch (err) {
    console.error(err);
  }
};
