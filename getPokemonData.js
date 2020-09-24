const infoList = document.getElementById('pokeInfo')

function getID() {
  let urlParam = new URLSearchParams(window.location.search);

  let id = urlParam.get('id');

  return id;

}

function getPokeStats() {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${getID()}`)
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon)
      //HREF
      let pokeEvolveLink = document.createElement("a");

      //List
      let pokeListImg = document.createElement('li');
      let pokeListName = document.createElement('li');
      let pokeListEvolvesFrom = document.createElement('li');

      //Get information
      let pokeGetName = document.createTextNode(capitalizeFirstLetter(pokemon.name));
      let pokeImage = document.createElement('img');
      // let pokeGetEvolve = document.createTextNode("Evolves from: " + capitalizeFirstLetter(pokemon.evolves_from_species.name))
      let evolvesFrom = document.createTextNode("Evolves from: ");

      //Create link for evolves from
      if (pokemon.evolves_from_species != null) {
        console.log(pokemon.evolves_from_species.name);
        pokeEvolveLink.textContent = capitalizeFirstLetter(pokemon.evolves_from_species.name);
        pokeEvolveLink.setAttribute('href', `show.html?id=${extractID(pokemon.evolves_from_species.url)}`);
      } else {
        pokeEvolveLink.textContent = ("NONE");
      }

      pokeImage.src = `https://pokeres.bastionbot.org/images/pokemon/${getID()}.png`;
      pokeImage.width = 200;
      pokeImage.height = 200;

      pokeListImg.appendChild(pokeImage);
      pokeListName.appendChild(pokeGetName);
      pokeListEvolvesFrom.appendChild(evolvesFrom);
      pokeListEvolvesFrom.appendChild(pokeEvolveLink);
      infoList.appendChild(pokeListImg);
      infoList.appendChild(pokeListName);
      infoList.appendChild(pokeListEvolvesFrom);
    }
    )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function extractID(url) {
  return url.split('/')[6];
}

getPokeStats()