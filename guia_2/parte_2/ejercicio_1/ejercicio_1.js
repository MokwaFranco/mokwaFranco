fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    const primerNombre = data.results[0].name;
    //console.log(primerNombre);

    document.getElementById("id_resultado").innerHTML = `
        Primer personaje: ${primerNombre}.
    `;
});