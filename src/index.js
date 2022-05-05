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
  pkmnUrl,
} from './modules/ShowPokemon.module.js';
import {
  getAllPokemonTypes,
  filteringByType,
  typesList,
  pkmType,
} from './modules/FilterByType.module.js';

const input = document.getElementById('search');
getAllPokemonNames();
getAllPokemons();
getPokemonInfo('charmander');
showPokemon();
console.log(pkmnUrl);

input.addEventListener('input', function () {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
});

//Recogemos todos los tipos de pokémon y los pintamos
getAllPokemonTypes();

//Click para seleccionar el tipo de pokémon elegido
typesList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('li.type')) {
    let pkmType = target.innerText;
    filteringByType(pkmType);
  } else {
    console.error('Error on target pokemon type');
  }
});

console.log(pkmType);
