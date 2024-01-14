const name = document.querySelector("#name");
const index = document.querySelector("#index");
const typesList = document.querySelector("#types");
const image = document.querySelector("#image");
const descriptionParagraph = document.querySelector("#description");
const statisticsList = document.querySelector("#statistics-list");
const weaknessesList = document.querySelector("#weaknesses-list");
const advantagesList = document.querySelector("#advantages-list");
const evolutionList = document.querySelector("#evolution-list");

const renderTypes = (types) => {
  return types
    .map((type) => `<span class="type">${type.type.name}</span>`)
    .join("");
};

const renderStatistics = (stats) => {
  return stats
    .map(
      (stat) => `
    <li>
      <span class="statistic-label">${stat.stat.name}: </span>
      <span class="statistic-value">${stat.base_stat}</span>
    </li>`
    )
    .join("");
};

const renderListItems = (items) => {
  return items.map((item) => `<li><span>${item}</span></li>`).join("");
};

const renderEvolutionList = (evolution) => {
  return evolution
    .map((pokemon) => {
      const evolutionTypes = renderTypes(pokemon.types);
      return `
      <li class="pokemon">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <div class="rect"></div>
        <div class="pokemon-info">
          <span class="index">#${pokemon.order.toLocaleString("pt-br", {
            minimumIntegerDigits: 3,
          })}</span>
          <span class="name">${pokemon.name}</span>
          <span class="types">${evolutionTypes}</span>
        </div>
      </li>
    `;
    })
    .join("");
};

const renderModal = (data) => {
  const { pokemon, species, types, evolution } = data;

  const uniqueWeaknesses = [
    ...new Set(
      []
        .concat(
          ...types.map((type) => type.damage_relations.double_damage_from)
        )
        .map((weakness) => weakness.name)
    ),
  ];
  const uniqueAdvantages = [
    ...new Set(
      []
        .concat(...types.map((type) => type.damage_relations.double_damage_to))
        .map((advantage) => advantage.name)
    ),
  ];

  infoContainer.classList.remove("skeleton");

  name.innerHTML = pokemon.name;
  index.innerHTML = `#${pokemon.order.toLocaleString("pt-br", {
    minimumIntegerDigits: 3,
  })}`;
  typesList.innerHTML = renderTypes(pokemon.types);
  image.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;

  const descriptionText = species.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );
  descriptionParagraph.innerHTML =
    descriptionText && descriptionText.flavor_text
      ? descriptionText.flavor_text
      : "Not Found ;-;";

  statisticsList.innerHTML = renderStatistics(pokemon.stats);
  weaknessesList.innerHTML = renderListItems(uniqueWeaknesses);
  advantagesList.innerHTML = renderListItems(uniqueAdvantages);
  evolutionList.innerHTML = renderEvolutionList(evolution);
};
