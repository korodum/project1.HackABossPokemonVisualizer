'use strict';

const input = document.getElementById('search');

console.log(input.value);

const getAllPokemons = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1126`
    );
    const data = await response.json();
    console.log(data);
    return await pokemons.push(...data.results);
  } catch (err) {
    console.error(err);
  }
};

getAllPokemons();

let pokemons = [];

const filteredPokemons = async (pokemons, query) => {
  const awaitResults = await Promise.all(
    pokemons.filter((pokemon) => {
      return pokemon.name.indexOf(query.toLowerCase()) !== -1;
    })
  );
  console.log(awaitResults);
};
console.log(setTimeout(filteredPokemons(pokemons, 'char'), 5000));

input.addEventListener('keypress', (e) => {
  e.key === 'Enter'
    ? search()
    : setTimeout(filteredPokemons(pokemons, input.value), 5000);
});
