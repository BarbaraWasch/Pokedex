function fetchPokemon() {
    const pokemonNameOrId = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                alert("Pokémon não encontrado!");
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('name').innerText = data.name.toUpperCase();
            document.getElementById('type').innerText = data.types.map(type => type.type.name).join(', ');
            document.getElementById('height').innerText = `${data.height / 10} m`;
            document.getElementById('weight').innerText = `${data.weight / 10} kg`;
            document.getElementById('pokemonImage').src = data.sprites.front_default;
        })
        .catch(error => console.log(error));
}
