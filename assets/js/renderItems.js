const list = document.querySelector("#pokemons-list");

const renderItems = () => {
  let pokemonsList = "";

  for (let i = 0; i < pokemonsArray.length; i++) {
    pokemonsList += `
            <li class="item" pokemon-id="${pokemonsArray[i].id}">
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

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const pokemonId = item.getAttribute("pokemon-id");
      openModal(pokemonId);
    });
  });
};
