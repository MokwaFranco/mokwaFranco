// Ejercicio 1

function saludar() {
    alert("¡Hola, mundo!");
    return;
}

// Ejercicio 2

function registrarNombre() {
    let nombre = document.getElementById("nombre");
    
    if (!nombre.value) {
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

function calcularResta() {
    let num1 = document.getElementById("id_n1").value;
    let num2 = document.getElementById("id_n2").value;

    if (!num1 || !num2) {
        document.getElementById("id_resultado").innerHTML = "ERROR: Ingresar un valor";
    } else {
        let resta = Number(num1) - Number(num2);
        // console.log(resta);

        if (Number(resta) < 0) {
            document.getElementById("id_resultado").innerHTML = "Resultado: " + resta + " (negativo)";
        } else if (Number(resta) === 0) {
            document.getElementById("id_resultado").innerHTML = "Resultado: " + resta + " (cero)";
        } else if (Number(resta) > 0) {
            document.getElementById("id_resultado").innerHTML = "Resultado: " + resta + " (positivo)";
        }
    }
}

// Ejercicio 7

function calcularProducto() {
    let num1 = document.getElementById("id_n1").value;
    let num2 = document.getElementById("id_n2").value;

    if (!num1 || !num2) {
        document.getElementById("id_resultado").innerHTML = "ERROR: Ingresar un valor";
    } else {
        let producto = Number(num1) * Number(num2);
        // console.log(producto);

        document.getElementById("id_resultado").innerHTML = "Resultado: " + producto;

        console.log(Number(num1) + "x1 = " + Number(num1) * 1);
        console.log(Number(num1) + "x2 = " + Number(num1) * 2);
        console.log(Number(num1) + "x3 = " + Number(num1) * 3);
        console.log(Number(num1) + "x4 = " + Number(num1) * 4);
        console.log(Number(num1) + "x5 = " + Number(num1) * 5);
    }
}

// Ejercicio 8

function calcularCociente() {
    let num1 = document.getElementById("id_n1").value;
    let num2 = document.getElementById("id_n2").value;

    if (!num1 || !num2) {
        document.getElementById("id_resultado").innerHTML = "Error: Ingresar valores.";
    } else if (Number(num2) === 0) {
            document.getElementById("id_resultado").innerHTML = "Error: No se piuede dividir por cero.";
    } else {
        let cociente = num1 / num2;

        document.getElementById("id_resultado").innerHTML = "Resultado: " + cociente.toFixed(2);
    }
}

// Ejercicio 9

function clasificarValor() {
    let numero = document.getElementById("id_num").value;

    if (Number(numero) < 0) {
        document.getElementById("id_resultado").innerHTML = "El numero ingresado es negativo.";
    } else if (Number(numero) === 0) {
        document.getElementById("id_resultado").innerHTML = "El numero ingresado es cero.";
    } else if (Number(numero) > 0) {
        document.getElementById("id_resultado").innerHTML = "El numero ingresado es positivo.";
    }
}

// Ejercicio 10

function verificarResto() {
    let num = document.getElementById("id_num").value;
    let entero = Math.floor(num);
    // console.log(entero);

    if (numero % 2 === 0) {
        document.getElementById("id_resultado").innerHTML = "El numero ingresado es par."
    } else {
        document.getElementById("id_resultado").innerHTML = "El numero ingresado es impar."
    }
}

// Ejercicio 11

function verificarEdad() {
    let nombre = document.getElementById("id_nombre").value;
    let edad = document.getElementById("id_edad").value;
    let diferencia = (18 - edad);

    if (Number(edad) < 0 || Number(edad) > 120) {
        document.getElementById("id_resultado").innerHTML = "Error: Valor para edad no valido.";
    } else if (Number(edad) < 18) {
        document.getElementById("id_resultado").innerHTML = nombre + " es menor de edad, le faltan " + diferencia + " anios.";
    } else if (Number(edad) >= 18) {
        document.getElementById("id_resultado").innerHTML = nombre + " es mayor de edad.";
    }
}

// Ejercicio 12

function compararValores() {
    let n1 = document.getElementById("id_n1").value;
    let n2 = document.getElementById("id_n2").value;

    if (Number(n1) > Number(n2)) {
        document.getElementById("id_resultado").innerHTML = "Valor mayor: " + n1;
    } if (Number(n2) > Number(n1)) {
        document.getElementById("id_resultado").innerHTML = "Valor mayor: " + n2;
    } else if (Number(n1) === Number(n2)) {
        document.getElementById("id_resultado").innerHTML = "Ambos valores son iguales.";
    }
}

// Ejercicio 13

function calcularAreaPerimetro() {
    let base = document.getElementById("id_base").value;
    let altura = document.getElementById("id_altura").value;

    let area = (Number(base) * Number(altura));
    let perimetro = (2 * (Number(base) + Number(altura)));

    if (Number(base) <= 0 || Number(altura) <= 0) {
        document.getElementById("id_resultado").innerHTML = "Error: Ingresar valores mayores a cero.";
    } else {
        document.getElementById("id_resultado").innerHTML = "Area: " + area +
                                                            "<br>Perimetro: " + perimetro;
    }
}

// Ejercicio 14

function convertirTemperaturas() {
    let celsius = Number(document.getElementById("id_celsius").value);

    let fahrenheit = ((celsius * 9/5) + 32);
    let kelvin = (celsius + 273.15);

    if (celsius < -273.15) {
        document.getElementById("id_resultado").innerHTML = "Error.";
    } else {
        document.getElementById("id_resultado").innerHTML = "Equivalente en F° (Fahrenheit): " + fahrenheit.toFixed(2) +
                                                            "<br>Equivalente en K° (Kelvin): " + kelvin.toFixed(2);
    }
}

// Ejercicio 15

function calcularPago() {
    let monto = Number(document.getElementById("id_monto").value);
    let porcentaje = Number(document.getElementById("id_porcentaje").value);

    let montoPropina = ((monto * porcentaje) / 100);
    let montoTotal = (monto + montoPropina);

    if (porcentaje < 0 || porcentaje > 100) {
        document.getElementById("id_resultado").innerHTML = "Error: Valor de porcentaje no valido.";
    } else {
        document.getElementById("id_resultado").innerHTML = "Propina: $" + montoPropina.toFixed(2) +
                                                            "<br>Total a pagar: $" + montoTotal.toFixed(2);
    }
}

// Ejercicio 16

function verificarRango() {
    let numero = Number(document.getElementById("id_num").value);
    let minimo = Number(document.getElementById("id_min").value);
    let maximo = Number(document.getElementById("id_max").value);

    if (minimo > maximo) {
        document.getElementById("id_resultado").innerHTML = "Error: Rango incompatible (minimo y maximo).";
        return;
    } else if (numero >= minimo && numero <= maximo) {
        document.getElementById("id_resultado").innerHTML = "El numero se encuentra dentro del rango establecido.";
        return;
    } else {
        document.getElementById("id_resultado").innerHTML = "Error. El numero se encuentra fuera del rango establecido.";
        return;
    }
}

// Ejercicio 17

function calcularOperacion() {
    let numero1 = Number(document.getElementById("id_n1").value);
    let numero2 = Number(document.getElementById("id_n2").value);
    let operacion = document.getElementById("id_operacion").value;

    if (operacion === "value_suma") {
        document.getElementById("id_resultado").innerHTML = (numero1 + numero2);
        return;
    } else if (operacion === "value_resta") {
        document.getElementById("id_resultado").innerHTML = (numero1 - numero2);
        return;
    } else if (operacion === "value_multiplicacion") {
        document.getElementById("id_resultado").innerHTML = (numero1 * numero2);
        return;
    } else if (operacion === "value_division") {
        if (numero2 === 0) {
            document.getElementById("id_resultado").innerHTML = "Error: No se puede dividir por cero.";
            return;
        } else {
            document.getElementById("id_resultado").innerHTML = (numero1 / numero2);
            return;
        }
    }
}

// Ejercicio 18

function aplicarDescuento() {
    let precio = Number(document.getElementById("id_precio").value);
    let descuento = Number(document.getElementById("id_descuento").value);
    let precioFinal = ((precio * descuento) / 100);

    if (descuento < 0 || descuento > 100) {
        document.getElementById("id_resultado").innerHTML = "Error: Valor para descuento no valido.";
    } else if (descuento === 0) {
        document.getElementById("id_resultado").innerHTML = "Sin descuento.<br>Precio final: " + precio + "$";
    } else if (descuento >= 1 && descuento <= 30) {
        document.getElementById("id_resultado").innerHTML = "Oferta<br>" + descuento + 
                                                            "% de descuento.<br>Precio final: " + precioFinal + "$";
    } else if (descuento > 30) {
        document.getElementById("id_resultado").innerHTML = "¡Mega oferta!<br>" + descuento +
                                                            "% de descuento.<br>Precio final: " + precioFinal + "$";
    }
}

// Ejercicio 19

function determinarBisiesto() {
    let anio = Number(document.getElementById("id_anio").value);

    if (anio % 4 === 0 && (anio % 100 !== 0 || (anio % 100 === 0 && anio % 400 === 0))) {
        document.getElementById("id_resultado").innerHTML = anio + " Es bisiesto.";
        return;
    } else {
        document.getElementById("id_resultado").innerHTML = anio + " No es bisiesto.";
        return;
    }
}

// Ejercicio 20

function calcularPrecio() {
    let precio = Number(document.getElementById("id_precio").value);
    let precioIva = Number((precio * 21) / 100);
    let conIva = document.getElementById("id_conIva").checked;

    if (conIva === true) {
        // console.log("Hola");
        let precioFinal = (precio + precioIva);
        document.getElementById("id_resultado").innerHTML = "Precio final (con IVA aplicado): $" + precioFinal;
        return;
    } else {
        // console.log("Chau");
        document.getElementById("id_resultado").innerHTML = "Precio final (sin IVA aplicado): $" + precio;
        return;
    }
}

// Ejercicio 21

function convertirSegundos() {
    let seg = Number(document.getElementById("id_segundos").value);

    let segundos = (seg % 60);
    let minutos = Math.floor((seg % 3600) / 60);
    let horas = Math.floor(seg / 3600);

    if (seg < 0) {
        document.getElementById("id_resultado").innerHTML = "Error. Valor ingresado no valido.";
        return;
    } else {
        document.getElementById("id_resultado").innerHTML = "Equivalente: " + horas + "h " + minutos + "m " + segundos + "s";
    }
}

// Ejercicio 22

function validarClave() {
    let clave1 = document.getElementById("id_pass1").value;
    let clave2 = document.getElementById("id_pass2").value;
    // console.log(clave1.length);

    if (clave1.length < 6) {
        document.getElementById("id_resultado").innerHTML = "Error: La clave debe tener al menos 6 caracteres.";
        return;
    } else if (clave1 !== clave2) {
        document.getElementById("id_resultado").innerHTML = "Error: Las claves no coinciden.";
        return;
    } else {
        document.getElementById("id_resultado").innerHTML = "Clave validada correctamente.";
    }
}

// Ejercicio 23

function analizarNota() {
    let nota = Number(document.getElementById("id_nota").value);

    if (nota < 0 || nota > 10) {
        document.getElementById("id_resultado").innerHTML = "Error: Valor para nota no valido.";
        return;
    } else if (nota <= 3) {
        document.getElementById("id_resultado").innerHTML = "Condicion: Desaprobado.";
        return;
    } else if (nota > 3 && nota <= 5) {
        document.getElementById("id_resultado").innerHTML = "Condicion: A recuperatorio.";
        return;
    } else if (nota > 5 && nota <= 7) {
        document.getElementById("id_resultado").innerHTML = "Condicion: Aprobado.";
        return;
    } else if (nota > 7 && nota <= 9) {
        document.getElementById("id_resultado").innerHTML = "Condicion: Aprobado (muy bueno).";
        return;
    } else if (nota === 10) {
        document.getElementById("id_resultado").innerHTML = "Condicion: Aprobado (sobresaliente).";
        return;
    }
}

// Ejercicio 24

function calcularVuelto() {
    let precio = Number(document.getElementById("id_precio").value);
    let entregado = Number(document.getElementById("id_entregado").value);

    if (entregado < precio) {
        let montoFaltante = (precio - entregado);

        document.getElementById("id_resultado").innerHTML = "Monto insuficiente." +
                                                            "<br>Faltante: $" + montoFaltante.toFixed(2);
        return;
    } else if (precio === entregado) {
        document.getElementById("id_resultado").innerHTML = "Monto exacto (sin vuelto).";
        return;
    } else if (entregado > precio) {
        let vuelto = (entregado - precio);

        document.getElementById("id_resultado").innerHTML = "Vuelto: $" + vuelto.toFixed(2);
        return;
    }
}

// Ejercicio 25

function calcular() {
    let num1 = Number(document.getElementById("id_n1").value);
    let num2 = Number(document.getElementById("id_n2").value);
    let opcion = document.getElementById("id_opciones").value;

    if (!num1 || !num2) {
        document.getElementById("id_resultado").innerHTML = "Error: Completar campos";
        return;
    } else if (opcion === "value_suma") {
        let suma = Number(num1 + num2);

        document.getElementById("id_resultado").innerHTML = "Resultado: " + suma;
        return;
    } else if (opcion === "value_resta") {
        let suma = Number(num1 - num2);

        document.getElementById("id_resultado").innerHTML = "Resultado: " + resta;
        return;
    } else if (opcion === "value_multiplicacion") {
        let multiplicacion = Number(num1 * num2);

        document.getElementById("id_resultado").innerHTML = "Resultado: " + multiplicacion;
        return;
    } else if (opcion === "value_division") {
        let division = Number(num1 / num2);

        document.getElementById("id_resultado").innerHTML = "Resultado: " + division;
        return;
    } else if (opcion === "value_potencia") {
        let potencia = Number(Math.pow(num1, num2));

        document.getElementById("id_resultado").innerHTML = "Resultado: " + potencia;
        return;
    }
}

function limpiar() {
    document.getElementById("id_n1").value = "";
    document.getElementById("id_n2").value = "";
    document.getElementById("id_resultado").innerHTML = "";
    return;
}