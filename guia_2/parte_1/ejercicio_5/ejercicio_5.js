fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    //console.log(personajes);

    const personajeMayor = personajes.reduce((edadMayor, edadActual) => {
        return (edadActual.age > edadMayor.age) ? edadActual : edadMayor;
    }, personajes[0]);

    document.getElementById("id_resultado").innerHTML = `
        El personaje mas viejo es ${personajeMayor.name} con ${personajeMayor.age} años.
    `;
});