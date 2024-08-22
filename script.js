
const textArea = document.querySelector(".text-area");
/*const mensaje1 = document.querySelector(".mensaje");*/
const btnCopiar = document.querySelector(".btn-copiar")

let vTextArea = document.getElementById("text-area")
let vRespuesta = document.getElementById("mensaje")
let vInfo = document.getElementById("info")
let vBtnCopiar = document.getElementById("btn-copiar")
let vImagenDerecha = document.getElementById("imagen-derecha")

/*const salida =document.getElementById('mensaje').value;*/

console.log(vRespuesta.value)


/*Funcion ocultar / Mostrar boton copiar*/
function visible(){
    let div = document.getElementById("btn-copiar");
    div.style.visibility = 'visible'
  }
  
  function oculto(){
    let div = document.getElementById("etiqueta");
    div.style.visibility = 'hidden';
  }



/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


         
function validarTexto (texto) { 
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio=""; 

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres espciales");
        return true;
    } else if (texto == vacio) {
        alert("Ingrese mensaje para encriptar");
        return true;
    } else {
        return false;
    }
} 



function btnEncriptar() {
    const elTextArea = textArea.value
    console.log(elTextArea)

    /*console.log("Entro en btencriptar()") */
    /*console.log(textArea.value)*/
    if (validarTexto(elTextArea) == false) {

        const textoEncriptado = encriptar(textArea.value);

        vRespuesta.innerHTML = textoEncriptado;
        vInfo.innerHTML = "";

        /*mensaje1.value = textoEncriptado;*/
        vRespuesta.value =textoEncriptado;

        /*vBntCopiar.style.display = "block";*/
        vBtnCopiar.style.visibility = "visible";
     
        /*vImagenDerecha.style.display = "none";*/
        vImagenDerecha.style.visibility = "hidden";
        
        textArea.value = "";

    }
}


function encriptar(strEncriptada) {
    /*console.log("Esta aqui 3")*/

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncriptada = strEncriptada.toLowerCase()

    for(i=0; i< matrizCodigo.length ; i++ ){
       if(strEncriptada.includes(matrizCodigo[i][0])) {
        strEncriptada = strEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

       } 
    }
    /*console.log(strEncriptada)*/
    return strEncriptada
}

function btnDesencriptar() {
    console.log("Entro a funcion btnDesencriptar")

    /*const textoEncriptado = desencriptar(textArea.value)*/
    /*mensaje.value = textoEncriptado;*/

    /* --------------------------------------- */
    const textoDesencriptado = desencriptar(vRespuesta.value);

    console.log(textoDesencriptado)

    vRespuesta.innerHTML = textoDesencriptado;
    vInfo.innerHTML = "";


        
    /* textArea.value = ""; */

    /* --------------------------------------- */

    /*console.log(vTextArea.value)*/
    /*const textoEncriptado = desencriptar(vTextArea.value)*/
    /*vRespuesta.value = textoEncriptado;*/
    
    textArea.value = "";
}




function desencriptar(strDesencriptada) {
    console.log("Entro a funcion desencriptar")
    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /*strDesencriptada = strDesencriptada.toLowerCase()*/

    for(i=0; i< matrizCodigo.length ; i++ ){
       if(strDesencriptada.includes(matrizCodigo[i][1])) {
        strDesencriptada = strDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

       } 
    }

    console.log(strDesencriptada)
    return strDesencriptada
}

function btnCopiar1() {
    /*var mensaje1 = document.querySelector(".mensaje");*/
    const salida =document.getElementById('mensaje').innerText;
    console.log("Esta en el boton copiar")
    console.log(vRespuesta.value)
    if (!salida) {
        alert("No hay texto para copiar");
    } else {
        alert("Texto copiado")
        navigator.clipboard.writeText(salida)
    }
    /*navigator.clipboard.writeText(salida)*/
    
    console.log("Esta aqui");
    /*console.log(mensaje1.value);*/
    console.log(vRespuesta.value);


    /*mensaje1.select();*/
    /*vRespuesta.select();*/
    /*document.execCommand("copy");*/

}
