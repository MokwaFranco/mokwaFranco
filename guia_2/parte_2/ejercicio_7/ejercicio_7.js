fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const imagenes = personajes.map(personaje => personaje.image);
    //console.log(imagenes);
    const todasImagenes = imagenes.every(imagen => imagen !== "");
    //console.log(todasImagenes);

    if (todasImagenes) {
        document.getElementById("id_resultado").innerHTML = `
            <p>Todos los personajes tienen imagen.</p>
        `;
    } else {
        document.getElementById("id_resultado").innerHTML = `
            <p>Hay personajes sin imagen.</p>
        `;
    }
});