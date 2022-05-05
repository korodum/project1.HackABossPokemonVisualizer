'use strict';

let pokemonNames = [];

const pkmnList = document.getElementById('pokemon-list');

function getAllPokemonNames() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokemonNames = data.results.map((pokemon) => pokemon.name);
      pokemonNames.sort();
      console;
      loadPkmn(pokemonNames, pkmnList);
    });
}

function loadPkmn(data, element) {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((item) => {
      innerElement += `
        <li>${item}</li>`;
    });
    element.innerHTML = innerElement;
  }
}

function filteredPokemons(pokemonNames, input) {
  return pokemonNames.filter((pokemonName) =>
    pokemonName.toLowerCase().includes(input.toLowerCase())
  );
}

export {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemons,
  pokemonNames,
  pkmnList,
};
