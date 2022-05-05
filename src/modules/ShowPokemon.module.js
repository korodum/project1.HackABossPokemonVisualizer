'use strict';

const name = document.getElementById('pokemon-name')

const pkmnUrl =[]

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
    const pkmns = await getAllPokemons()
      for (const pkmn of pkmns) {

        if(pkmn.name.toLowerCase() === input.toLowerCase()){
          return await pkmnUrl.push(pkmn.url)
      }
    }
  } catch (error) {
    console.error(error);
  }

}

async function showPokemon () {
  try {

  } catch (error) {
    console.error(error);
  }

}

export {getAllPokemons , showPokemon, getPokemonInfo, pkmnUrl}