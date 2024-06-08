const search = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const image = document.getElementById('pokemon-image');
const id = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const speed = document.getElementById('speed');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const pokemonStats = document.getElementById('pokemon-stats');
//const pokemon = { name: '', id: '', weight: '', height: '', types: [], hp: '', attack: '', defense: '', speed: '', specialAttack: '', specialDefense: '' };

searchBtn.addEventListener('click', fetchData);

function fetchData() {
    // Convert the search term to lowercase, remove special characters, and replace spaces with dashes
    const searchTerm = search.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '-'); 

    // Fetch the data from the API
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`)
    .then(response => response.json())
    .then(data => {
        pokemonName.textContent = data.name;
        id.textContent = data.id;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = ` Height: ${data.height}`;
        types.textContent = data.types.map(type => type.type.name).join(', ');
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        pokemonStats.style.display = 'block';

    })
    .catch(error => {
        console.log(error);
        alert('Pokemon not found');
    });

};

function displayData() {

}