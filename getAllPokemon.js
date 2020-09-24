const refList = document.getElementById('pokeList')

function getPokemon() {

  fetch("https://pokeapi.co/api/v2/generation/1/")
    .then(response => response.json())
      .then(pokemonList => {
        for (pokemon of pokemonList.pokemon_species) {
          let a = document.createElement("a")
          let newPokemon = document.createElement('li') 

          a.textContent = capitalizeFirstLetter(pokemon.name)
          a.setAttribute('href', `show.html?id=${extractID(pokemon.url)}`)
          console.log(pokemon)
          newPokemon.appendChild(a)
          refList.appendChild(newPokemon)
        }
    });   
}

function capitalizeFirstLetter(string) {

  return string.charAt(0).toUpperCase() + string.slice(1);

}

function extractID(url) {

  return url.split('/')[6];

}

getPokemon()