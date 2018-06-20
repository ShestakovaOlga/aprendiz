let num1;
let num2;
let operacion;
let estado = "num1";
let resultado;



function programa(op) {
    switch (estado) {
        case "num1":
            // para mostrar en la consola
            console.log("estamos en num1");
            num1 = parseFloat(document.getElementById("pantalla").value);
            operacion = op;
            estado = "num2";
            document.getElementById("pantalla").value = "";
            break;
        case "num2":
            console.log("estamos en num2");
            num2 = parseFloat(document.getElementById("pantalla").value);
            document.getElementById("pantalla").value = "";
            calcular();
            console.log("ya tenemos el resultado, vamos a mostrarlo")
            pintar(resultado);
            estado = "num1";
            break;
    }
}

function calcular() {
    console.log("estamos calculando")
    switch (operacion) {
        case "sumar":
            console.log("calculamos la suma de", num1, " + ", num2)
            resultado = num1 + num2;
            console.log("el resultado es ", resultado)
            break;
    }
    switch (operacion) {
        case "multiplicar":
            console.log("calculamos el multiplice de", num1, "*", num2)
            resultado = num1 * num2;
            console.log("el resultado es", resultado)
            break;
    }
    switch (operacion) {
        case "dividir":
            console.log("calculamos el resultado de", num1, "/", num2)
            resultado = num1 / num2;
            console.log("el resultado es", resultado)
            break;
    }
    switch (operacion) {
        case "restar":
            console.log("calculamos el resultado de", num1, "-", num2)
            resultado = num1 - num2;
            console.log("el resultado es", resultado)
            break;
    }


}
var ultimo = null;

function marcar(elemento) {
    ultimo = elemento;
}

function limpiar() {
    // para limpiar la pantalal, solo tenemos que escribir dentro un texto vacio ""
    document.getElementById("pantalla").value = ""
    console.log("borramos datos")
}
//tengo que 

function pintar(datos) {
    console.log("pintamos en la pantalla", datos);
    document.getElementById("pantalla").value = datos;
}


function escribirNumero(numero) {
    document.getElementById("pantalla").value += numero;
}