const items = document.querySelectorAll(".item");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");
const infoContainer = document.querySelector(".info-container");

const openModal = async (pokemonId) => {
  modal.style.display = "block";
  infoContainer.classList.add("skeleton");
  const pokemon = await getPokemonByIdOrName(pokemonId);
  if (!pokemon) {
    infoContainer.classList.remove("skeleton");
    name.innerHTML = "Não encontrado";
    image.innerHTML = `<img src="./assets/images/pokeball.png" alt="nenhum pokemon encontrado">`;
    descriptionParagraph.innerHTML = "";
    typesList.innerHTML = "";
    statisticsList.innerHTML = "";
    weaknessesList.innerHTML = "";
    advantagesList.innerHTML = "";
    evolutionList.innerHTML = "";

    return;
  }
  const species = await getPokemonSpecies(pokemonId);
  const types = await Promise.all(
    pokemon.types.map((item) => getPokemonType(item.type.name))
  );
  const evolution = await getEvolutionChain(species.evolution_chain.url);
  renderModal({ pokemon, species, types, evolution });
  modal.scrollTo();
};

const closeModal = () => {
  modal.style.display = "none";
  modal.innerHTML = initialValues;
};

closeBtn.addEventListener("click", closeModal);
