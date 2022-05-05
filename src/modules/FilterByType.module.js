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
      console;
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

const filteringByType = (type) => {
  fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((res) => res.json())
    .then((data) => {
      let filteredPokemonsByType = [];
      data.pokemon.map((pokemon) => {
        return filteredPokemonsByType.push(pokemon.pokemon);
      });
      console.log(filteredPokemonsByType);
    });
};

export {
  getAllPokemonTypes,
  loadPokemonTypes,
  filteringByType,
  pokemonTypes,
  typesList,
  pkmType,
  /** 
   * 
  filteredPokemons,
  pokemonNames,
  pkmnList,
  */
};
