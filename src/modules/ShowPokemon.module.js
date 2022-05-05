'use strict';

const name = document.getElementById('pokemon-name')

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
    console.log(pkmn)
    const pkmnRes = await fetch(pkmn.url)
    const pkmnData = await pkmnRes.json()
    console.log(pkmnData);
    return pkmnData
  } catch (error) {
    console.error(error);
  }
}

export {getAllPokemons , showPokemon, getPokemonInfo,}