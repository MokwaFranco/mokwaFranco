let mapa;
let marcador;

document.addEventListener("DOMContentLoaded", function() {
    mapa = L.map("id_contenedor_mapa").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap"
    }).addTo(mapa);
});

//console.log(typeof L);

function buscarUsuario() {
    fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(data => {
        const usuario = data.results[0];
        
        const latitud = parseFloat(usuario.location.coordinates.latitude);
        const longitud = parseFloat(usuario.location.coordinates.longitude);
        //console.log(latitud, longitud);

        const imagen = usuario.picture.large;

        const nombre = usuario.name.first;
        const apellido = usuario.name.last;
        //console.log(nombre, apellido);

        const correo = usuario.email;
        const telefono = usuario.phone;

        const pais = usuario.location.country;
        const ciudad = usuario.location.city;
        //console.log(pais, ciudad);

        const nacionalidad = usuario.nat;

        if (marcador) {
            marcador.remove();
        }

        marcador = L.marker([latitud, longitud]).addTo(mapa);
        mapa.setView([latitud, longitud], 10);

        document.getElementById("id_contenedor_datos").innerHTML = `
            <h2>Usuario</h2>
            <p>Nombre Completo: ${nombre} ${apellido}</p>
            <img src="${imagen}">
            <h2>Info</h2>
            <p>Correo Electronico: ${correo}</p>
            <p>Telefono: ${telefono}</p>
            <p>Residencia (Ciudad, Pais): ${ciudad}, ${pais}</p>
            <p>Nacionalidad: ${nacionalidad}</p>
        `;
    });
}