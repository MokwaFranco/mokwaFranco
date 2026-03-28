// Ejercicio 1

function saludar() {
    alert("¡Hola, mundo!");
    return;
}

// Ejercicio 2

function registrarNombre() {
    let nombre = document.getElementById("nombre");
    
    if (nombre.value === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa tu nombre.";
        return;
    } else {
        document.getElementById("resultado").innerHTML = "¡Hola, " + String(nombre.value) + "!";
        return;
    }
}

// Ejercicio 3

function analizarDato() {
    let valor = document.getElementById("id_valor");

    if (isNaN(valor.value) === false) {
        document.getElementById("id_resultado_valor").innerHTML = "Tipo: " + typeof valor.value + " - Es un numero valido";
        return;
    } else if (isNaN(valor.value) === true) {
        document.getElementById("id_resultado_valor").innerHTML = "Tipo: " + typeof valor.value + " - No es un numero";
        return;
    }
}

// Ejercicio 4

function calcularOperacion() {
    let resultado = ((25 * 4) - 10);
    
    console.log(resultado);
    document.getElementById("id_resultado_calculo").innerHTML = "Resultado: " + resultado;
}

// Ejercicio 5

function calcularSuma() {
    let num1 = document.getElementById("id_n1").value;
    let num2 = document.getElementById("id_n2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("id_resultado_suma").innerHTML = "ERROR: Completar campos";
    } else {
        document.getElementById("id_resultado_suma").innerHTML = Number(num1) + Number(num2);
    }
}

// Ejercicio 6