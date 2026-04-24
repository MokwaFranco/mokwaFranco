fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    
    const personajesMasculinos = personajes.reduce((masculinos, personaje) => {
        //console.log(personaje.gender);
        
        if (personaje.gender === "Male") {
            return masculinos + 1;
        }
        return masculinos;
    }, 0);
    //console.log(personajesMasculinos);

    const personajesFemeninos = personajes.reduce((femeninos, personaje) => {
        if (personaje.gender === "Female") {
            return femeninos + 1;
        }
        return femeninos;
    }, 0);
    //console.log(personajesFemeninos);

    document.getElementById("id_resultado").innerHTML = `
        <p>Masculino: ${personajesMasculinos}</p>
        <p>Femeninos: ${personajesFemeninos}</p>
    `;
});