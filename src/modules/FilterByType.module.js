'use strict';

const typesList = document.getElementById('types-list');
let pokemonTypes = [];
let pkmType = '';

function getAllPokemonTypes() {
  fetch(`https://pokeapi.co/api/v2/type/${pkmType}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('pokemonTypes', data);
      pokemonTypes = data.results.map((type) => type.name);
      pokemonTypes.sort();
      console.log('POKEMON TYPES', pokemonTypes);
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

/** 

function filteredPokemons(pokemonNames, input) {
  return pokemonNames.filter((pokemonName) =>
    pokemonName.toLowerCase().includes(input.toLowerCase())
  );
}

*/

export {
  getAllPokemonTypes,
  loadPokemonTypes,
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
