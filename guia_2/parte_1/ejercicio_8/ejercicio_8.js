fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const personajesNoNulos = personajes.filter(personaje => personaje.age !== null);
    const personajesOrdenados = personajesNoNulos.sort((a, b) => a.age - b.age).splice(0, 5);
    //console.log(personajesOrdenados);
    
    personajesOrdenados.forEach(personaje => {
        document.getElementById("id_resultado").innerHTML += `
            <p>Nombre: ${personaje.name}</p>
            <p>Edad: ${personaje.age}</p>
        `;
    });
});

// Uso el metodo filter porque sino muestra personajes con edad de valor igual a null