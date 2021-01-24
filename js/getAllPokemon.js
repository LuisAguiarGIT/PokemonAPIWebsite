const refList = document.getElementById('pokeList')

function getPokemon() {

  fetch("https://pokeapi.co/api/v2/generation/1/")
    .then(response => response.json())
      .then(pokemonList => {
          
          let row = document.createElement('div')
          row.classList.add('row', 'align-items-center', 'justify-content-center')

          for (pokemon of pokemonList.pokemon_species) {
            console.log(pokemon)

            // Defining the card element
            let card = document.createElement('div')
            card.classList.add('card', 'mb-3', 'text-center')

            card.setAttribute("style", "width:13rem; height:13rem")

            // Defining the card image inside the card element
            let pokeImage = document.createElement('img')
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
            a.textContent = capitalizeFirstLetter("More info!")
            a.setAttribute('href', `show.html?id=${extractID(pokemon.url)}`)

            // Appending content to card body
            cardBody.appendChild(pokeImage)
            cardBody.appendChild(cardTitle)
            cardBody.appendChild(a)
            card.appendChild(cardBody)
            row.appendChild(card)
            refList.appendChild(row)
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