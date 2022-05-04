'use strict';
import { getAllPokemonNames, loadPkmn, filteredPokemons, pokemons, pkmnList } from "./modules/Filter.module.js";


const input = document.getElementById('search');


getAllPokemonNames()

input.addEventListener('input', function() {
  const filteredPkmn = filteredPokemons(pokemons, input.value);
  loadPkmn(filteredPkmn, pkmnList);
})

input.addEventListener('Enter', (e) => {
  console.log('sdi')
})