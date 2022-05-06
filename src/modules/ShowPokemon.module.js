'use strict';

const name = document.getElementById('pokemon-name')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const hp =document.getElementById('hp')
const attack =document.getElementById('attack')
const defense =document.getElementById('defense')
const specialAttack =document.getElementById('special-attack')
const specialDefense =document.getElementById('special-defense')
const speed =document.getElementById('speed')

async function getAllPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    const data = await response.json()

    return await data.results
  } catch (error) {
    console.error(error);
  }



}

async function getPokemonInfo (input) {
  try {
    const pkmns = await getAllPokemons();

    for (const pkmn of pkmns) {
      if(pkmn.name.toLowerCase() === input.toLowerCase()){
        return pkmn;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function showPokemon (input) {
  try {
    const pkmn = await getPokemonInfo(input);
    const pkmnRes = await fetch(pkmn.url);
    const pkmnData = await pkmnRes.json();
    name.value = pkmnData.species.name;
    height.value = `${pkmnData.height/10} meters`;
    weight.value = `${pkmnData.weight/10} kilos`;
    hp.value = pkmnData.stats[0].base_stat
    attack.value = pkmnData.stats[1].base_stat
    defense.value = pkmnData.stats[2].base_stat
    specialAttack.value = pkmnData.stats[3].base_stat
    specialDefense.value = pkmnData.stats[4].base_stat
    speed.value = pkmnData.stats[5].base_stat

  } catch (error) {
    console.error(error);
  }
}

export {getAllPokemons , showPokemon, getPokemonInfo,}