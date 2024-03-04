function cambiarNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    
    if (nombre != null) {
        document.getElementById("saludo").innerText = `!Hola ${nombre}!`;
    
    }
}