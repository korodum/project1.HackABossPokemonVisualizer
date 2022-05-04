'use strict';

const input = document.getElementById('search');
const button = document.querySelector('button');

const getAllPokemons = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1126`
    );
    const data = await response.json();
    return await data.results;
  } catch (err) {
    console.error(err);
  }
};

const filteredPokemons = async (keyword) => {
  const pokemons = await getAllPokemons()
  return  pokemons.filter((pokemon) => {
      return pokemon.name.includes(keyword.toLowerCase());
    })
};
filteredPokemons('char')
.then((data) => {
  console.log(data)
})
console.log();
button.addEventListener('submit', (e) => {

})

input.addEventListener('keypress', (e) => {
  e.key === 'Enter'
    ? search()
    : setTimeout(filteredPokemons(pokemons, input.value), 5000);
});
