'use strict';

const name = document.getElementById('pokemon-name');
const pkmnTypes = document.getElementById('pkmn-types');

async function getAllPokemons() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=1126'
    );
    const data = await response.json();

    return await data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemonInfo(input) {
  try {
    const pkmns = await getAllPokemons();

    for (const pkmn of pkmns) {
      if (pkmn.name.toLowerCase() === input.toLowerCase()) {
        return pkmn;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function showPokemon(input) {
  try {
    const pkmn = await getPokemonInfo(input);
    const pkmnRes = await fetch(pkmn.url);
    const pkmnData = await pkmnRes.json();
    console.log(pkmnData);
    const pokemonCard = document.querySelector('aside#pokemon-card');
    let types = pkmnData.types.map((type) => type.type.name);

    pokemonCard.innerHTML = `
                <h2 id="pokemon-name">${pkmnData.species.name.toUpperCase()}</h2>  
                <img src="${
                  pkmnData.sprites.back_default
                }" alt="pokemon back image" id="back-image" />
                <img src="${
                  pkmnData.sprites.front_default
                }" alt="pokemon frontal image" id="front-image" />
                <ul>
                  <h3>BASE STATS</h3>
                  <li>
                    <p>HP</p>
                    <div>
                      <p>${pkmnData.stats[0].base_stat}</p>
                      <div style="
                            width:${pkmnData.stats[0].base_stat}%">
                      </div>
                    </div>
                  </li>
                  <li>
                    <p>ATTACK</p>
                    <div>
                      <p >${pkmnData.stats[1].base_stat}</p>
                      <div style="
                            width:${pkmnData.stats[1].base_stat}%"></div>
                    </div>
                  </li>
                  <li>
                    <p>DEFENSE</p>
                    <div>
                      <p >${pkmnData.stats[2].base_stat}</p>
                      <div style="width:${pkmnData.stats[2].base_stat}%"></div>
                    </div>
                  </li>
                  <li>
                    <p>SPECIAL ATTACK</p>
                    <div>
                      <p >${pkmnData.stats[3].base_stat}</p>
                      <div style="width:${pkmnData.stats[3].base_stat}%"></div>
                    </div>
                  </li>
                  <li>
                    <p>SPECIAL DEFENSE</p>
                    <div>
                      <p >${pkmnData.stats[4].base_stat}</p>
                      <div style="width:${pkmnData.stats[4].base_stat}%"></div>
                    </div>
                  </li>
                  <li>
                    <p>SPEED</p>
                    <div>
                      <p >${pkmnData.stats[5].base_stat}</p>
                      <div style="width:${pkmnData.stats[5].base_stat}%;"></div>
                    </div>
                  </li>
                  <li>
                    <p>HEIGHT</p>
                    <p >${pkmnData.height / 10} meters</p>
                  </li>
                  <li>
                    <p>WEIGHT</p>
                    <p >${pkmnData.weight / 10} kilos</p>
                  </li>
                  <li>
                  <p>TYPES</p>
                  ${types}
                  </li>
                </ul>
    `;

    console.log(pkmnTypes);
  } catch (error) {
    console.error(error);
  }
}

export { getAllPokemons, showPokemon, getPokemonInfo, pkmnTypes };
