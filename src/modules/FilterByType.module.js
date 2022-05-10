'use strict';
const typesList = document.getElementById('types-list');
let pokemonTypes = [];
async function getAllPokemonTypes() {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();
    pokemonTypes = data.results.map((type) => type.name);
    pokemonTypes.sort();
    loadPokemonTypes(pokemonTypes, typesList);
  } catch (error) {
    console.error(error);
  }
}

function loadPokemonTypes(data, element) {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    for (let i = 0; i < data.length; i++) {
      innerElement += `
        <li class="type">
        ${data[i]}
        <img src="./src/assets/imgs/types/${
          i + 1
        }.svg"  style="width:2rem;height:2rem"/>
        </li>`;
    }
    element.innerHTML = innerElement;
  }
}

async function filteringByType(type) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  let filteredPokemonsByType = [];
  filteredPokemonsByType = data.pokemon.map((pokemon) => pokemon.pokemon.name);
  filteredPokemonsByType.sort();

  return filteredPokemonsByType;
}

export {
  getAllPokemonTypes,
  loadPokemonTypes,
  filteringByType,
  pokemonTypes,
  typesList,
};
