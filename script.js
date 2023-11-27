document.addEventListener('DOMContentLoaded', () => {
    cargarPokemon();
});

async function cargarPokemon() {
const nombre = document.getElementById("name");
const imagen = document.getElementById("image");
const numero = document.getElementById("number");
const pokemonTypes = document.getElementById('types');

const randomPokemon = Math.floor(Math.random() * 1017) + 1;
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);

const data = await response.json();

const types = data.types.map(type => type.type.name);
pokemonTypes.textContent = `Type: ${types.join(', ')}`;
nombre.textContent = `${data.name}`;
imagen.src = data.sprites.front_default;
numero.textContent = `#${data.id}`;
};