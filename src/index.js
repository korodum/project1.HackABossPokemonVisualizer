'use strict';
import { getAllPokemonNames, loadPkmn, filteredPokemonNames, pokemonNames, pkmnList } from "./modules/Filter.module.js";
import { getAllPokemons /*, showPokemon*/,getPokemonInfo} from './modules/ShowPokemon.module.js';

const input = document.getElementById('search');


getAllPokemonNames()
getAllPokemons();
getPokemonInfo('charmander')
//showPokemon()

input.addEventListener('input', function() {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
})
