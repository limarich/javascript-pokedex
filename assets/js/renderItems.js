const list = document.querySelector("#pokemons-list");

const renderItems = () => {
  let pokemonsList = "";

  for (let i = 0; i < pokemonsArray.length; i++) {
    pokemonsList += `
            <li class="item">
            <img src="${pokemonsArray[i].sprites.front_default}" alt=${
      pokemonsArray[i].name
    } />
            <span class="name">${pokemonsArray[i].name}</span>
            <span class="index">#${pokemonsArray[i].order.toLocaleString(
              "pt-br",
              {
                minimumIntegerDigits: 3,
              }
            )}</span>
          </li>`;
  }

  list.innerHTML = pokemonsList;
};
