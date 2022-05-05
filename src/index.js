'use strict';
import { getAllPokemonNames, loadPkmn, filteredPokemonNames, pokemonNames, pkmnList } from "./modules/Filter.module.js";
import { getAllPokemons, pokemons} from './modules/ShowPokemon.module.js';

const input = document.getElementById('search');


getAllPokemonNames()
getAllPokemons();
input.addEventListener('input', function() {
  const filteredPkmn = filteredPokemonNames(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
})
