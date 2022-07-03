function bienvenida(nombre, apellido) {
    let saludo = "Bienvenido " + nombre + " " + apellido_persona;
    alert(saludo)
}




let nombre = prompt("Indique su nombre")
let apellido_persona = prompt("Indique su apellido")


bienvenida(nombre, apellido_persona);
let montoTotal = parseInt(prompt("Ingrese el total de dinero requerido"));

let interes = 1.50;
function calcINt(montoTotal, interes) {
    return montoTotal * interes
}

let totalConInteres = calcINt(montoTotal,interes);
alert("El total a abonar con intereses incluidos es de " + totalConInteres , "$");
