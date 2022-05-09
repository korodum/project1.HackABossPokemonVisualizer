'use strict';

const typesList = document.getElementById('types-list');
let pokemonTypes = [];
let pkmType = '';

function getAllPokemonTypes() {
  fetch(`https://pokeapi.co/api/v2/type/${pkmType}`)
    .then((res) => res.json())
    .then((data) => {
      pokemonTypes = data.results.map((type) => type.name);
      pokemonTypes.sort();
      loadPokemonTypes(pokemonTypes, typesList);
    });
}

function loadPokemonTypes(data, element) {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((item) => {
      innerElement += `
        <li class="type">${item}</li>`;
    });
    element.innerHTML = innerElement;
  }
}

 let filteredPokemonsByType = [];

async function filteringByType(type) {
  let res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  let data = await res.json();
  data.pokemon.map((pokemon) => {
    filteredPokemonsByType.push(pokemon.pokemon.name);
  });
    for (const pokemon of filteredPokemonsBytype) {

    }
  return filteredPokemonsByType;
}

export {
  getAllPokemonTypes,
  loadPokemonTypes,
  filteringByType,
  pokemonTypes,
  typesList,
  pkmType,
  filteredPokemonsByType
};
