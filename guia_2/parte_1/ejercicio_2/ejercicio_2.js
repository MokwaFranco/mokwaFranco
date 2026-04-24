fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results.slice(0, 5);

    personajes.forEach(personaje => {
        document.getElementById("id_resultado").innerHTML += `
            <p>${personaje.name}</p>
        `
    });
});