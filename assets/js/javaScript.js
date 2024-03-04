function cambiarNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    
    if (nombre != null) {
        document.getElementById("saludo").innerText = `!Hola ${nombre}!, es un gusto conocerte, espero estes teniendo un bonito dia`;
    
    }
}