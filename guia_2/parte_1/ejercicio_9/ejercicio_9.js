fetch("https://thesimpsonsapi.com/api/characters")
.then(response => response.json())
.then(data => {
    const personajes = data.results;
    const primerosPersonajes = personajes.slice(0, 8);
    const contenedor = document.getElementById("id_tarjeta");

    primerosPersonajes.forEach(personaje => {
        contenedor.innerHTML += `
            <div class="clase_tarjeta">
                <img src="https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}">
            </div>
        `;
    });
});