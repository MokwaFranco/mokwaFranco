fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    //console.log(personajes);
    
    personajes.forEach(personaje => {
        document.getElementById("id_resultado").innerHTML += `
            <p>${personaje.name}, ${personaje.occupation}</p>
        `;
    });
});