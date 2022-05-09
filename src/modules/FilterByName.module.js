'use strict';

let pokemonNames = [];

const pkmnList = document.getElementById('pokemon-list');

async function getAllPokemonNames() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    const data = await response.json()
    pokemonNames = data.results.map((pokemon) => pokemon.name)
    pokemonNames.sort();

        loadPkmn(pokemonNames, pkmnList);

  } catch (error) {

  }
}

function loadPkmn(data, element) {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((item) => {
      innerElement += `
      <li class="name">${item}</li>
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
