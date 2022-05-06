'use strict';
import {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemonNames,
  pokemonNames,
  pkmnList,
} from './modules/FilterByName.module.js';
import { getAllPokemons, getPokemonInfo, showPokemon,} from './modules/ShowPokemon.module.js';
import {
  getAllPokemonTypes,
  filteringByType,
  typesList,
  pkmType,
} from './modules/FilterByType.module.js';

const input = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn')


getAllPokemonNames();




input.addEventListener('input', function () {
  console.log(input.value)
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

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  showPokemon(input.value)
})

pkmnList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('li.name')) {
    console.log('funciona');
    //fetch al pokemon para pintarlo en pantalla igual que con filterByType
  } else {
    console.log('no funciona');
  }
});
