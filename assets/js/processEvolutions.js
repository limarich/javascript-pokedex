const processEvolutions = (evolution) => {
  let evolutionArray = [evolution.species];

  if (evolution.evolves_to.length > 0) {
    evolution.evolves_to.forEach((nextEvolution) => {
      const nextEvolutionArray = processEvolutions(nextEvolution);
      evolutionArray = evolutionArray.concat(nextEvolutionArray);
    });
  }
  return evolutionArray;
};
