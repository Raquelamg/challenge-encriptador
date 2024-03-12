




function limpiarCaja() {
    document.getElementById("entrada").value = "";
}

function cifrar() {
    let mensajeSecreto = (document.getElementById("entrada").value);
    limpiarCaja();
    document.getElementById("salida").value = encriptar(mensajeSecreto);
}


const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada
}

function desencriptar(fraseDesencriptada) {
    var resultado = "";
    fraseDesencriptada = fraseDesencriptada.split("");
    for (var i = 0; i < fraseDesencriptada.length; i++) {

        console.log(fraseDesencriptada[i])
        var decrypt = fraseDesencriptada[i];
        for (let m = 0; m < matriz_code.length; m++) {
            if (fraseDesencriptada[i] == matriz_code[m][0]) {
                var codigo = matriz_code[m][1];
                i += codigo.length - 1;
            }
        }
        resultado += decrypt;

    }
    return resultado;
}

function descifrar() {
    let mensajeSecreto = (document.getElementById("entrada").value);
    limpiarCaja();
    document.getElementById("salida").value = desencriptar(mensajeSecreto);

}

function copyToClipBoard() {
    var content = document.getElementById('salida');

    content.select();
    document.execCommand("copy")


}
