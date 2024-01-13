const getPokemonData = async (pokedex) => {
  try {
    const pokemons = await Promise.all(
      pokedex.map((item) => fetch(item.url).then((res) => res.json()))
    ).then((values) => {
      handleSavePokemons(values);
      return values;
    });

    console.log(pokemons.map((poke) => poke.name));
    renderItems();
  } catch (err) {
    console.error(err);
  }
};
