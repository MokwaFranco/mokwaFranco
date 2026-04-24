fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const especiesAgrupadas = personajes.reduce((acumulador, personaje) => {
        const especie = personaje.species;
        //console.log(especie);

        if (!acumulador[especie]) {
            acumulador[especie] = 0;
        }

        acumulador[especie]++;
        return acumulador;
    }, {});
    //console.log(especiesAgrupadas);

    const llavesObjetos = Object.keys(especiesAgrupadas);
    llavesObjetos.forEach(objeto => {
        document.getElementById("id_resultado").innerHTML += `
            <p>Especie: ${objeto}:</p>
            <p>Cantidad: ${especiesAgrupadas[objeto]}</p>
        `;
    });
});