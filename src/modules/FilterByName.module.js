'use strict';

let pokemonNames = [];

const pkmnList = document.getElementById('pokemon-list');

function getAllPokemonNames() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokemonNames = data.results.map((pokemon) => pokemon);
      pokemonNames.sort();
      loadPkmn(pokemonNames, pkmnList);
    });
}

function loadPkmn(data, element) {
  if (data) {
    console.log(data);
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((item) => {
      innerElement += `
      <li class="name">${item.name}</li>
      `;
    });
    element.innerHTML = innerElement;
  }
}

function filteredPokemonNames(pokemonNames, input) {
  return pokemonNames.filter((pokemonName) =>
    pokemonName.toLowerCase().includes(input.toLowerCase())
  );
}

export {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemonNames,
  pokemonNames,
  pkmnList,
};
