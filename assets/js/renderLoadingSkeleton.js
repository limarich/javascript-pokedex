const SKELETON_ITEMS = 5;

const pokemonList = document.querySelector("#pokemons-list");

const renderSkeletons = () => {
  let skeleton_items = "";
  for (let i = 0; i < SKELETON_ITEMS; i++) {
    skeleton_items += `
        <li class="item skeleton">
        <div class="rect"></div>
        <span></span>
        <span></span>
      </li>
        `;
  }
  pokemonList.innerHTML += skeleton_items;
};
