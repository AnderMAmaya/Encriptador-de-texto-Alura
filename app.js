// función para encriptar el texto
function encriptar() {
    // obtenemos el texto ingresado por el usuario
    let texto = document.getElementById("inputText").value;
    // reemplazamos cada vocal por el resultado correcto
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // ocultar la imagen y mostrar el resultado
    mostrarResultado(textoEncriptado);
}

// función para desencriptar el texto
function desencriptar() {
    let textoEncriptado = document.getElementById("inputText").value;
    let texto = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // mostramos el resultado desencriptado en el área de resultado
    mostrarResultado(texto);
}


// función para copiar el texto al portapapeles
function copiarTexto() {
    // obtenemos el valor del área de texto de salida
    let texto = document.getElementById("outPutText").value;
    // Usamos la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(texto)
        .then(() => {
            // Muestra un mensaje de confirmación si la copia fue exitosa
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            // Muestra un mensaje de error si la copia falla
            console.error("Error al copiar el texto: ", err);
        });
}

// función para mostrar el resultado  
function mostrarResultado(texto) {
    // ocultar imagen
    document.getElementById("Imagen-buho").style.display = "none";
    // mostrar el campo de texto con el resultado
    let outPutText = document.getElementById("outPutText");
    outPutText.style.display = "block"; // cambia el display para hacerlo visible 
    outPutText.value = texto; // inserta el texto en el área de texto
}
function recargarPagina() {
    // Recarga la página actual, similar a presionar F5
    location.reload();
}
