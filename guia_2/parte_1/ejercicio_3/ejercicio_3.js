fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const personajesFemeninos = personajes.filter(personaje => personaje.gender === "Female");
    let contadorPersonajesFemeninos = 0;
    //console.log(personajesFemeninos);

    personajesFemeninos.forEach(personajeFemenino => {
        contadorPersonajesFemeninos += 1;
    });

    document.getElementById("id_resultado").innerHTML = `
        <p>Se encontraron ${contadorPersonajesFemeninos} personajes femeninos:</p>
    `;

    personajesFemeninos.forEach(personajeFemenino => {
        document.getElementById("id_resultado").innerHTML += `
            <p>${personajeFemenino.name}</p>
        `;
    });
});