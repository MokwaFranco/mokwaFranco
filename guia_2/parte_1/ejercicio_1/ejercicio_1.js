fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personaje = data.results[0];
    document.getElementById("id_resultado").innerHTML = `
    Personaje: ${personaje.name}
    `
});