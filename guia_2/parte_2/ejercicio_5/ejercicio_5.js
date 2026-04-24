//let personajes = [];

function buscarPersonaje() {
    const personajeIngresado = document.getElementById("id_ingreso_buscador").value;

    fetch(`https://rickandmortyapi.com/api/character/${personajeIngresado}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);

        const contenedor = document.getElementById("id_resultado");
        contenedor.innerHTML = `
            <br>
            <img src="${data.image}">
            <p>Personaje: ${data.name}</p>
            <p>Estado: ${data.status}</p>
        `;
    })
    .catch(error => console.error("Error: ", error));
}