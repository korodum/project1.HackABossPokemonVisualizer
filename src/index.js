'use strict';

const input = document.getElementById('search');

console.log(input.value);
const pokemons = [];
const search = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1126`
    );
    const data = await response.json();
    pokemons.push(data.results);
  } catch (err) {
    console.error(err);
  }
};
search();
console.log(pokemons[0]);
input.addEventListener('keypress', (e) => {
  e.key === 'Enter' ? search() : console.error('error');
});
