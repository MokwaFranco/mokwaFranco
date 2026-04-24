const urlSimpson = `https://thesimpsonsapi.com/api/characters`;
const urlRick = `https://rickandmortyapi.com/api/character`;

let personajeSimpson = [];
let personajeRick = [];

Promise.all([fetch(urlSimpson), fetch(urlRick)])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(([dataSimspon, dataRick]) => {
    personajeSimpson = dataSimspon.results;
    //console.log(personajeSimpson);
    personajeRick = dataRick.results;
    //console.log(personajeRick);
});

function sortearPersonajes() {
    const aleatorioSimpson = Math.floor(Math.random() * personajeSimpson.length);
    const personajeAleatorioSimpson = personajeSimpson[aleatorioSimpson];
    //console.log(personajeAleatorioSimpson.name);

    const aleatorioRick = Math.floor(Math.random() * personajeRick.length);
    const personajeAleatorioRick = personajeRick[aleatorioRick];
    //console.log(personajeAleatorioRick.name);

    document.getElementById("id_tarjeta").innerHTML = `
        <br>
        <div class="clase_tarjeta_imagen">
            <img id="id_imagen_simpson" src="https://cdn.thesimpsonsapi.com/200${personajeAleatorioSimpson.portrait_path}">
            <p>Edad: ${personajeAleatorioSimpson.age}</p>
        </div>
        <div class="clase_tarjeta_imagen">
            <img id="id_imagen_rick" src="${personajeAleatorioRick.image}">
            <p>Episodios: ${personajeAleatorioRick.episode.length}</p>
        </div>
    `;
}