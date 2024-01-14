const getEvolutionChain = async (uri) => {
  try {
    const data = await fetch(uri).then((data) => data.json());

    const PokemonEvolutionArray = await Promise.all(
      processEvolutions(data.chain).map((evolution) => {
        return getPokemonByIdOrName(evolution.name);
      })
    );

    return PokemonEvolutionArray;
  } catch (err) {
    console.error(err);
  }
};
