fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    //console.log(personajes);
    const episodios = personajes.map(personaje => personaje.episode);
    //console.log(episodios);
    const episodiosOrdenados = personajes.sort((a, b) => b.length - a.length);
    //console.log(episodiosOrdenados);

    episodiosOrdenados.forEach(personaje => {
        document.getElementById("id_resultado").innerHTML += `
            <p>Personaje: ${personaje.name}</p>
            <p>Episodios: ${personaje.episode.length}</p><br>
        `;
    });
});