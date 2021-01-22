const refList = document.getElementById('pokeList')

function getPokemon() {

  fetch("https://pokeapi.co/api/v2/generation/1/")
    .then(response => response.json())
      .then(pokemonList => {

        // let cardGroup = document.createElement('div')
        // cardGroup.classList.add('card-group')

          for (pokemon of pokemonList.pokemon_species) {
            console.log(pokemon)

            // Defining the card element
            let card = document.createElement('div')
            card.classList.add('card', 'mb-3', 'text-center')

            card.setAttribute("style", "width:13rem; height:13rem")

            // Defining the card image inside the card element
            let pokeImage = document.createElement('img')
            // pokeImage.classList.add('card-img-top')

            pokeImage.src = `https://pokeres.bastionbot.org/images/pokemon/${extractID(pokemon.url)}.png`;
            pokeImage.width = 100;
            pokeImage.height = 100;

            // Defining the card body inside the card element
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')

            // Defining the card title inside the card body
            let cardTitle = document.createElement('h5')
            cardTitle.classList.add('card-title')

            // Adding text to the card title
            var name = document.createTextNode(capitalizeFirstLetter(pokemon.name))
            cardTitle.appendChild(name)

            // Defining the link for the card body
            let a = document.createElement("a")
            a.classList.add('btn', 'btn-primary')
            // let newPokemon = document.createElement('li') 

            a.textContent = capitalizeFirstLetter("More info!")
            a.setAttribute('href', `show.html?id=${extractID(pokemon.url)}`)

            // Appending content to card body
            cardBody.appendChild(pokeImage)
            cardBody.appendChild(cardTitle)
            cardBody.appendChild(a)
            // console.log(pokemon)
            // newPokemon.appendChild(a)
            // refList.appendChild(newPokemon)
            // card.appendChild(cardTitle)
            
            card.appendChild(cardBody)
            // cardGroup.appendChild(card)
            refList.appendChild(card)
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