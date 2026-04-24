fetch(`https://rickandmortyapi.com/api/character`)
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const cantidadPersonajes = personajes.length;
    //console.log(cantidadPersonajes);

    const cantidadEstadoVivos = personajes.filter(personaje => personaje.status === "Alive").length;
    //console.log(personajesVivos);
    const cantidadEstadoMuertos = personajes.filter(personaje => personaje.status === "Dead").length;
    const cantidadEstadoDesconocido = personajes.filter(personaje => personaje.status === "unknown").length;

    //const episodios = personajes.map(personaje => personaje.episode);
    //console.log(episodios);

    const episodiosOrdenados = personajes.sort((a, b) => b.episode.length - a.episode.length);
    //console.log(episodiosOrdenados);

    const personajeMasEpisodios = personajes[0];
    //console.log(personajeMasEpisodios);

    /*
    
    const personajeMasEpisodios = personajes.reduce((maximo, personaje) => {
        return (personaje.episode.length > maximo.episode.length) ? personaje : maximo;
    }, personajes[0]);
    
    */

    const personajeMenosEpisodios = personajes.reduce((minimo, personaje) => {
        return (personaje.episode.length < minimo.episode.length) ? personaje : minimo;
    }, personajes[0]);
    //console.log(personajeMenosEpisodios);

    const especiesEncontradas = personajes.map(personaje => personaje.species);
    //console.log(especiesEncontradas);

    document.getElementById("id_resultado").innerHTML = `
        <p>Cantidad total de personajes (primera pagina): ${cantidadPersonajes}</p><br>
        
        <p>Cantidad vivos: ${cantidadEstadoVivos}</p>
        <p>Cantidad muertos: ${cantidadEstadoMuertos}</p>
        <p>Cantidad estado desconocido: ${cantidadEstadoDesconocido}</p><br>
        
        <p>Personaje con mas episodios.</p>
        <p>Nombre: ${personajeMasEpisodios.name}</p>
        <p>Episodios: ${personajeMasEpisodios.episode.length}</p><br>
    
        <p>Personaje con menos episodios.</p>
        <p>Nombre: ${personajeMenosEpisodios.name}</p>
        <p>Episodios: ${personajeMenosEpisodios.episode.length}</p><br>

        <p>Especies encontradas: ${[...new Set(especiesEncontradas)].join(", ")}</p>
    `;
});