'use strict';

let pokemons = []

const pkmnList =  document.getElementById('pokemon-list')

function getAllPokemonNames() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then((res) => res.json())
    .then((data) => {
      pokemons = data.results.map((pokemon) => pokemon.name)
      pokemons.sort()
      console
      loadPkmn(pokemons, pkmnList)
    });
}

function loadPkmn(data, element) {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((item) => {
      innerElement += `
        <li>${item}</li>`
    })
    element.innerHTML = innerElement;
  }
}

function filteredPokemons (pokemons, input) {
  return pokemons.filter((pokemon) => pokemon.toLowerCase().includes(input.toLowerCase()))
}

export {getAllPokemonNames, loadPkmn, filteredPokemons,pokemons, pkmnList}