'use strict';

const fs = require('fs');

const input = document.getElementById('search')

console.log(input.value);
const pokemons = [];
const search = async (input) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1126`
    );
    const data = await response.json();
    pokemons.push(...data.results);
    console.log(pokemons)
    } catch (err) {
    console.error(err);
  }
}
;
search();

input.addEventListener('keypress', (e) => {
  e.key === 'Enter' ? search() : console.error('error');
});
