'use strict';
import {
  getAllPokemonNames,
  loadPkmn,
  filteredPokemonNames,
  pokemonNames,
  pkmnList,
} from './modules/FilterByName.module.js';
import { getAllPokemons, getPokemonInfo, showPokemon, pkmnTypes} from './modules/ShowPokemon.module.js';
import {
  getAllPokemonTypes,
  filteringByType,
  typesList,
  loadPokemonTypes,
  filteredPokemonsByType
} from './modules/FilterByType.module.js';

const input = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn')



getAllPokemonNames();
console.log()
//Recogemos todos los tipos de pokémon y los pintamos
getAllPokemonTypes();

input.addEventListener('input', function () {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
});

//Click para seleccionar el tipo de pokémon elegido
typesList.addEventListener('click', (e) => {

  const { target } = e;
  if (target.matches('li.type')) {
    pkmnList.innerHTML = ''
    let pkmType = target.innerText;
    filteringByType(pkmType);
    console.log(filteredPokemonsByType);
    loadPokemonTypes(filteredPokemonsByType, pkmnList)
  } else {
    console.error('Error on target pokemon type');
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  pkmnList.innerHTML = ''
  pkmnTypes.innerHTML='';
  showPokemon(input.value);
  input.value = ''

})

pkmnList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('li.name, li.type')) {
    input.value= target.innerText
    pkmnList.innerHTML=''
    pkmnTypes.innerHTML= ''
    showPokemon(input.value)
    input.value = ''
    } else {
    console.log('no funciona');
  }
});

console.log(pkmnList)
