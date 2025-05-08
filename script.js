//Lista de productos
const productos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const listaUsuarios = [];

//Función para mostrar los productos
function mostrarproductos () {
console.log (productos);
}

//Función para crear una cuenta
function crearCuenta() {
    const correo = prompt("Introduce tu correo electrónico:");
    const contraseña = prompt("Introduce tu contraseña:");

    if (correo && contraseña) {
        const confirmar = confirm("¿Deseas crear la cuenta con estos datos?");
        if (confirmar) {
        listaUsuarios.push({ correo, contraseña });
        alert("Cuenta creada correctamente.");
        } else {
        alert("Cuenta cancelada.");
    }
        console.log("Lista de usuarios:");
        console.log(listaUsuarios);

        // Devolver la lista
        return listaUsuarios;
    } else {
        alert("Debes ingresar correo y contraseña.");
    }
}
//Función para verificar la dispo de los productos
function verificarDisponibilidad() {
    const numero = prompt("Ingresa un número para verificar si está disponible:");
    let disponible = false;

    if (isNaN(numero)) {
        alert("Eso no es un número válido.");
        return;
    }
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === numero) {
        disponible = true;
        break;
        }
    }
    if (disponible) {
        alert("✅ El número " + numero + " está disponible.");
    } else {
        alert("❌ El número " + numero + " no está disponible.");
    }
}
crearCuenta();
verificarDisponibilidad();
mostrarproductos ();


