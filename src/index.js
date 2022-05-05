'use strict';
import {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemonNames,
  pokemonNames,
  pkmnList,
} from './modules/FilterByName.module.js';
import { getAllPokemons, getPokemonInfo, showPokemon, pkmnUrl } from './modules/ShowPokemon.module.js';
import {
  getAllPokemonTypes,
  loadPokemonTypes,
  pokemonTypes,
  typesList,
  pkmType,
} from './modules/FilterByType.module.js';

const input = document.getElementById('search');
getAllPokemonNames();
getAllPokemons();
getPokemonInfo('charmander')
showPokemon()
console.log(pkmnUrl);

input.addEventListener('input', function() {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
});

//
//
//Recogemos todos los typos de pokémon y los pintamos
getAllPokemonTypes();

//Click para seleccionar el tipo de pokémon elegido
typesList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('li.type')) {
    console.log('match motherfucker', target.innerText);
    let pkmType = target.innerText;
    console.log(pkmType);
    console.log(`pokemons del tipo ${pkmType}`, getAllPokemonTypes());
  } else {
    console.error('Error on target pokemon type');
  }
});

console.log(pkmType);
