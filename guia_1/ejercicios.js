// BLOQUE 1

// Ejercicio 1

const colores = ["rojo", "verde"];
//console.log(colores);

colores.push("azul");
colores.push("amarillo");
//console.log(colores);

// Ejercicio 2

const dias = ["Lunes", "Martes", "Miercoles"];
//console.log(dias);

const diaEliminado = dias.pop();
//console.log(dias);
//console.log(diaEliminado);

// Ejercicio 3

const frutas = ["manzana", "pera"];
//console.log(frutas);

frutas.unshift("banana");
//console.log(frutas);

// Ejercicio 4

const numeros = [10, 20, 30, 40];
numeros.shift();
//console.log(numeros);

// Ejercicio 5

const nombres = ["Juan", "Ana", "Pedro", "Marta", "Luis"];
nombres.splice(2, 1);
//console.log(nombres);

// Ejercicio 6

const meses = ["Enero", "Marzo", "Abril"];
meses.splice(1, 0, "Febrero");
//console.log(meses);

// Ejericicio 7

const mochila = ["Cuaderno", "Lapiz"];

if (mochila.length < 3) {
    mochila.push("Regla");
}
//console.log(mochila);

// Ejercicio 8

const tareas = ["Lavar", "Cocinar"];
const terminadas = [];

const cocinar = tareas.pop();

terminadas.unshift(cocinar);

//console.log(cocinar);
//console.log(tareas);
//console.log(terminadas);

// Ejercicio 9

const herramientas = ["Martillo", "Destornillador", "Pinza"];
herramientas.splice(1, 1, "Llave inglesa");
//console.log(herramientas);

// Ejercicio 10

const fila = ["Cliente 1", "Cliente 2"];
fila.push("Cliente 3");
//console.log(fila);

fila.shift();
//console.log(fila);

// BLOQUE 2

// Ejercicio 11

const nombres2 = ["Lucas", "Matias", "Sofia"];

nombres2.forEach(nombre => {
    //console.log("Alumno: [" + nombre + "]")    
});

// Ejercicio 12

const stock = ["Monitor", "Teclado", "Mouse"];

if (stock.includes("Parlante")) {
    //console.log("'Parlante' se encuentra en la lista.");
} else {
    //console.log("'Parlante' no se encuentra en la lista.");
}

// Ejercicio 13

const alumnos = [
    {nombre: "Ana", nota: 7},
    {nombre: "Hugo", nota: 9},
    {nombre: "Luz", nota: 4}
];
//console.log(alumnos.find(alumno => alumno.nota > 6));

// Ejercicio 14

const premios = ["Oro", "Plata", "Bronce"];
//console.log("Indice: " + premios.findIndex(premio => premio === "Plata") + " (Plata).");

// Ejercicio 15

const lista = ["Chrome", "Firefox", "Edge"];

function recibirLista(lista, listaElemento) {
    if (lista.includes(listaElemento)) {
        return `'${listaElemento}' se encuentra incluido en la lista.`;
    } else {
        return `'${listaElemento}' no se encuentra incluido en la lista.`;
    }
}
//console.log(recibirLista(lista, "Firefox"));
//console.log(recibirLista(lista, "Brave"));

// Ejercicio 16

const puntajes = [10, 20, 30];

let puntajeTotal = 0;

puntajes.forEach(puntaje => {
    puntajeTotal += puntaje;
});
//console.log(`Puntaje total: ${puntajeTotal}`);

// Ejercicio 17

const precios = [120, 80, 45, 200];
//console.log(precios.find(precio => precio < 50));

// Ejercicio 18

const mascotas = ["Perro", "Gato"];
//console.log(mascotas.findIndex(mascota => mascota === "Loro"));

// Ejercicio 19

const palabras = ["hola", "mundo"];

palabras.forEach(palabra => {
    //console.log(palabra.toUpperCase());
});

// Ejercicio 20

const ids = [101, 102, 103, 104];

if (ids.includes(105)) {
    //console.log("El ID 105 se encuentra presente.");
} else {
    //console.log("El ID 105 no se encuentra presente.");
}

// BLOQUE 3

// Ejercicio 21

const base = [1, 2, 3, 4, 5];
const baseNuevo = base.map(b => b * 10);
//console.log(baseNuevo);

// Ejercicio 22

const edades = [12, 18, 25, 10, 30];
const edadesNuevo = edades.filter(edad => edad >= 18);
//console.log(edadesNuevo);

// Ejercicio 23

const lista1 = ["Pan", "Leche"];
const lista2 = ["Carne", "Fruta"];
//console.log(lista1.concat(lista2));

// Ejercicio 24

const letras = ["a", "b", "c", "d", "e", "f"];
//console.log(letras.slice(2, 5));

// Ejercicio 25

const items = ["Inicio", "Contacto"];
//console.log(items.map(item => `<li>${item}<li>`));

// Ejercicio 26

const palabras2 = ["Sol", "Computadora", "Casa", "Televisor"];

palabras2.forEach(palabra => {
    if (palabra.length > 5) {
        //console.log(palabra);
    }
});

// Ejercicio 27

const num = [1, 2, 3, 4, 5];
//console.log(num.slice(3, 5));

// Ejercicio 28

const productos = [
    {id: 1, nombre: "Celular"},
    {id: 2, nombre: "Tablet"}
];
//console.log(productos.map(producto => producto.nombre));

// Ejercicio 29

const valores = [1, 2, 3, 4, 5, 6, 7, 8];

valores.forEach(valor => {
    if (valor % 2 === 0) {
        //console.log(valor);
    }
});

// Ejercicio 30

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];
//console.log(a.concat(b, c));

// BLOQUE 4

// Ejercicio 31

const gastos = [100, 250, 600, 150];
const totalGastado = (gastos.reduce((totalGastos, gasto) => totalGastos + gasto, 0));
//console.log(totalGastado);

// Ejercicio 32

const frase = ["JavaScript", "es", "genial."];
const fraseCompleta = frase.reduce((palabras, palabra) => palabras + " " + palabra);
//console.log(fraseCompleta);

// Ejercicio 33

const notas = [4, 8, 3, 10, 5, 7];
let notasAprobados = [];

notas.forEach(nota => {
    if (nota > 6) {
        notasAprobados.unshift(nota);
    }
});
//console.log(notasAprobados);
//console.log(notasAprobados.map(notaAprobado => notaAprobado * 10));

// Ejercicio 34

const examen = [7,8, 9, 10];
const suma = examen.reduce((notas, nota) => notas + nota, 0);
//console.log(suma);

const promedio = (suma / examen.length);
//console.log(promedio);

// Ejercicio 35

const datos = [-2, 5, 8, -1, 10];
const positivos = datos.filter(dato => dato > 0);
//console.log(positivos);

const potenciaPositivos = positivos.map(positivo => Math.pow(positivo, 2));
//console.log(potenciaPositivos);

// Ejercicio 36

const nombres3 = ["Ana", "Pedro", "Ana", "Juan", "Ana"];
const anasTotal = nombres3.reduce((anas, ana) => {
    if (ana === "Ana") {
        return anas + 1;
    } return anas;
}, 0);
//console.log(anasTotal);

// Ejercicio 37

const movimientos = [100, -50, 200, -100];
const saldoFinal = movimientos.reduce((contadorMovimientos, movimiento) => contadorMovimientos + movimiento, 0);
//console.log(saldoFinal);

// Ejercicio 38

const original = [1, 2, 3];
const copia = original.slice();
copia.push(4);
//console.log(`Original: ${original}`);
//console.log(`Copia: ${copia}`);

// Ejercicio 39

const nacimientos = [1990, 2005, 2012];
const fechaActual = 2026;
const edades2 = nacimientos.map(nacimiento => fechaActual - nacimiento);
//console.log(`Edades: ${edades2}`);

// Ejercicio 40

const frutas2 = ["Pera", "Uva", "Coco"];
const ul = document.getElementById("id_ul");

frutas2.forEach(fruta => {
    const li = document.createElement("li");
    li.innerHTML = fruta;
    //ul.appendChild(li);
});