const search = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const image = document.getElementById('sprite');
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
            image.src = data.sprites.front_default;
            weight.textContent = `Weight: ${data.weight} `;
            height.textContent = `Height: ${data.height}`;
            types.innerHTML = data.types.map(type => {
                let style = `border-radius: 5px; padding: 5px; margin: 5px;`;
                switch (type.type.name) {
                    case 'normal':
                        style += 'background-color: #A8A77A;';
                        break;
                    case 'fire':
                        style += 'background-color: #EE8130;';
                    case 'water':
                        style += 'background-color: #6390F0;';
                        break;
                    case 'electric':
                        style += 'background-color: #F7D02C;';
                        break;
                    case 'grass':
                        style += 'background-color: #7AC74C;';
                        break;
                    case 'ice':
                        style += 'background-color: #96D9D6;';
                        break;
                    case 'fighting':
                        style += 'background-color: #C22E28;';
                        break;
                    case 'poison':
                        style += 'background-color: #A33EA1;';
                        break;
                    case 'ground':
                        style += 'background-color: #E2BF65;';
                        break;
                    case 'flying':
                        style += 'background-color: #A98FF3;';
                        break;
                    case 'psychic':
                        style += 'background-color: #F95587;';
                        break;
                    case 'bug':
                        style += 'background-color: #A6B91A;';
                        break;
                    case 'rock':
                        style += 'background-color: #B6A136;';
                        break;
                    case 'ghost':
                        style += 'background-color: #735797;';
                        break;
                    case 'dragon':
                        style += 'background-color: #6F35FC;';
                        break;
                    case 'dark':
                        style += 'background-color: #705746;';
                        break;
                    case 'steel':
                        style += 'background-color: #B7B7CE;';
                        break;
                    case 'fairy':
                        style += 'background-color: #D685AD;';
                        break;
                    default:
                        style = 'background-color: #A8A77A;';
                }
                return `<p class="${type.type.name}" style="${style}">${type.type.name}</p>`;
            }).join('');
            hp.textContent = data.stats[0].base_stat;
            attack.textContent = data.stats[1].base_stat;
            defense.textContent = data.stats[2].base_stat;
            specialAttack.textContent = data.stats[3].base_stat;
            specialDefense.textContent = data.stats[4].base_stat;
            speed.textContent = data.stats[5].base_stat;
            pokemonStats.style.display = 'flex';
            image.style.width = '200px';
            image.style.height = '200px';
        })
        .catch(error => {
            console.log(error);
            alert('Pokemon not found');
        });

};

function displayData() {

}