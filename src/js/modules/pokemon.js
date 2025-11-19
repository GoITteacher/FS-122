const refs = {
  formEl: document.querySelector('.js-pokemon-form'),
  listEl: document.querySelector('.js-pokemon-list'),
};

function fetchPokemon(pokemonName) {
  const baseUrl = 'https://pokeapi.co/api/v2';
  const endPoint = `/pokemon/${pokemonName}`;
  const url = baseUrl + endPoint;
  return fetch(url).then(res => res.json());
}

function pokemonTemplate({
  height,
  weight,
  id,
  name,
  base_experience,
  sprites: { front_default, back_default },
}) {
  const markup = `<div class="pokemon-card pokemon-item">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`;
  return markup;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.elements.query.value;
  fetchPokemon(name).then(pokemon => {
    const markup = pokemonTemplate(pokemon);
    refs.listEl.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
});
