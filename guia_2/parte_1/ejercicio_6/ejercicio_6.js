let personajes = [];

fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    personajes = data.results;
    //console.log(personajes);
});

function buscarPersonaje() {
    let personajeIngresado = document.getElementById("id_ingreso_buscador").value;
    let personajeEncontrado = personajes.find((personaje => personaje.name.toLowerCase() === personajeIngresado.toLowerCase()));
    
    if (personajeEncontrado) {
        //console.log("Personaje encontrado.");

        document.getElementById("id_resultado").innerHTML = `
            <p>Personaje encontrado.</p>
            <p>Nombre: ${personajeEncontrado.name}</p>
            <p>Ocupacion: ${personajeEncontrado.occupation}</p>
            <p>Edad: ${personajeEncontrado.age}</p>
        `;
    } else {
        //console.log("Personaje no encontrado.");

        document.getElementById("id_resultado").innerHTML = `
            <p>Personaje no encontrado.</p>
        `;
    }
}