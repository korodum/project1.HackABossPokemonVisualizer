'use strict';

const input = document.getElementById('search');

console.log(input.value);
const search = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.value}`
    );
    const data = await response.json();
    console.log('data', data);
  } catch (err) {
    console.error(err);
  }
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    search();
  }
});
