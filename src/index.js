'use strict';
import {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemonNames,
  pokemonNames,
  pkmnList,
} from './modules/FilterByName.module.js';
import {
  getAllPokemons,
  getPokemonInfo,
  showPokemon,
  pkmnTypes,
} from './modules/ShowPokemon.module.js';
import {
  getAllPokemonTypes,
  filteringByType,
  typesList,
  loadPokemonTypes,
} from './modules/FilterByType.module.js';

const input = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn');
const btnFilter = document.getElementById('btn-filter');
const filterScreen = document.querySelector('.filter-screen');
const title = document.querySelector('h1');

title.addEventListener('click', () => {
  getAllPokemonNames();
});
getAllPokemonNames();
console.log();
//Recogemos todos los tipos de pokémon y los pintamos
getAllPokemonTypes();
//Recogemos todos los nombres de pokémon y los pintamos
input.addEventListener('input', function () {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
});

//Click para filtrar por el tipo del pokémon elegido (fuego, agua, veneno fantasma...)
typesList.addEventListener('click', async (e) => {
  const { target } = e;
  if (target.matches('li.type')) {
    pkmnList.innerHTML = '';
    let pkmType = target.innerText;
    const filteredPokemonsByType = await filteringByType(pkmType);
    filterScreen.classList.remove('in');
    loadPokemonTypes(filteredPokemonsByType, pkmnList);
  } else {
    console.error('Error on target pokemon type');
  }
});
//Submit para elegir  el pokémon
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  pkmnList.innerHTML = '';
  pkmnTypes.innerHTML = '';
  showPokemon(input.value);
  input.value = '';
  if (window.innerWidth >= 1024) {
    getAllPokemonNames();
  }
});
//Click en la lista para seleccionar el pokemon
pkmnList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('li.name, li.type')) {
    input.value = target.innerText;
    pkmnList.innerHTML = '';
    pkmnTypes.innerHTML = '';
    showPokemon(input.value);
    input.value = '';
    if (window.innerWidth >= 1024) {
      getAllPokemonNames();
    }
  } else {
    console.log('no funciona');
  }
});

//Mostrar filters

btnFilter.addEventListener('click', (e) => {
  console.log(filterScreen);
  filterScreen.classList.toggle('in');
});
