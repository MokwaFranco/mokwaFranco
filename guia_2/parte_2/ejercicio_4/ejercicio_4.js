fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const personajesHumanos = personajes.filter(personaje => personaje.species === "Human");
    //console.log(personajesHumanos);

    document.getElementById("id_resultado").innerHTML = `
        Personajes humanos encontrados: ${personajesHumanos.length}.
    `;

    personajesHumanos.forEach(personajeHumano => {
        document.getElementById("id_resultado").innerHTML += `
            <p>${personajeHumano.name} - ${personajeHumano.species}</p>
        `;
    });
});