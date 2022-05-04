'use strict';

const name = document.getElementById('pokemon-name')

let pokemons = []

function getAllPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then((res) => res.json())
    .then((data) => {
      pokemons = data.results
    });
}

export {getAllPokemons, pokemons}