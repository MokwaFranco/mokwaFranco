

function buscarImagen() {
    const personajeIngresado = document.getElementById("id_ingreso_buscador").value.toLowerCase();
    
    fetch(`https://rickandmortyapi.com/api/character?name=${personajeIngresado}`)
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        //console.log(personajes);
        const imagenes = personajes.map(personaje => personaje.image);
        //console.log(imagenes);
        
        personajes.forEach(personaje => {
            document.getElementById("id_resultado").innerHTML += `
            <div class="clase_tarjeta">  
                <br><img src="${personaje.image}">
                <p>Personaje: ${personaje.name}</p>
                <p>Estado: ${personaje.status}</p><br>
            </div>    
            `;
        });
    });
}