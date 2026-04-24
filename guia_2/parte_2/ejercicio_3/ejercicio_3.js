fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    //console.log(personajes);
    const personajesVivos = personajes.filter(personaje => personaje.status === "Alive");
    //console.log(personajesVivos);
    const nombresPersonajesVivos = personajesVivos.map(personaje => personaje.name);
    //console.log(nombresPersonajesVivos);

    document.getElementById("id_resultado").innerHTML = `
        Personajes vivos de esta pagina: ${personajesVivos.length}.
    `;

    nombresPersonajesVivos.forEach(nombrePersonajeVivo => {
        document.getElementById("id_resultado").innerHTML += `
            <p>${nombrePersonajeVivo}</p>
        `;
    });
});