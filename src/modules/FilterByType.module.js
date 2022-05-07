'use strict';

const typesList = document.getElementById('types-list');
let pokemonTypes = [];
let pkmType = '';
let pokemonTypesList = document.getElementById(
  'pokemon-filtered-by-types-list'
);
let pokemonList = document.getElementById('pokemon-list');

console.log('pokemon list', pokemonTypesList);
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

let filteredPokemonsByType = [];
const filteringByType = async (type) => {
  let res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  let data = await res.json();
  console.log(data);
  data.pokemon.map((pokemon) => {
    filteredPokemonsByType.push(pokemon.pokemon);
  });
  paintPokemonsByType();
  console.log(filteredPokemonsByType);
  return filteredPokemonsByType;
};

const paintPokemonsByType = async () => {
  filteredPokemonsByType.map((pokemon) => {
    const pokemonTypes = document.createElement('li');
    pokemonTypes.innerText = pokemon.name;
    pokemonTypesList.append(pokemonTypes);
  });
};

export {
  getAllPokemonTypes,
  loadPokemonTypes,
  filteringByType,
  pokemonTypes,
  typesList,
  pkmType,
};
