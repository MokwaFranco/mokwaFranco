let personajes = [];

fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    personajes = data.results;
    //console.log(personajes);
});

function buscarOcupacion() {
    ocupacionIngresada = document.getElementById("id_ingreso_ocupacion").value;
    ocupacionEncontrada = personajes.some(personaje => personaje.occupation === ocupacionIngresada);
    
    if (ocupacionEncontrada === true) {
        document.getElementById("id_resultado").innerHTML = `
            <p>Si, existe un personaje con esa ocupacion.</p>
        `;
    } else {
        document.getElementById("id_resultado").innerHTML = `
            <p>No se encontro ningun personaje con esa ocupacion.</p>
        `;
    }
}