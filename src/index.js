'use strict';
import { getAllPokemonNames, loadPkmn, filteredPokemons, pokemonNames, pkmnList } from "./modules/Filter.module.js";
import { getAllPokemons, pokemons} from './modules/ShowPokemon.module.js';

const input = document.getElementById('search');


getAllPokemonNames()
getAllPokemons()

input.addEventListener('input', function() {
  const filteredPkmn = filteredPokemons(pokemonNames, input.value);
  loadPkmn(filteredPkmn, pkmnList);
})
