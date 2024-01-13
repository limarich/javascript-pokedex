let pokemonsArray = [];

const handleSavePokemons = (pokemons) => {
  const newPokemons = pokemons.filter(
    (pokemon) =>
      !pokemonsArray.some((localPokemon) => localPokemon.id === pokemon.id)
  );
  const updatedPokemons = [...pokemonsArray, ...newPokemons];
  pokemonsArray = updatedPokemons;
};
