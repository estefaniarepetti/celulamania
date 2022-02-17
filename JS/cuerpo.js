//NOSOTROS - FORMULARIO // 

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const message = document.getElementById("message");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");


boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solucitud enviada correctamente";
        resultado.classList.add("green")
    }

    function limpiar() {
        nombre.value = "";
        telefono.value = "";
        email.value = "";
        message.value = "";
    }
    limpiar();
})

const validarCampos = () => {
    let error = [];
    if (message.value.length < 5) {
        error[0] = true;
        error[1] = "El mensaje no puede contener menos de 5 caracteres";
        return error;
    } else if (message.value.length > 240) {
        error[0] = true;
        error[1] = "El mensaje no puede contener mas de de 240 caracteres";
    }
    error[0] = false;
    return error;
}


const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("log-in").prepend('<button id="btn-enviar">Enviar</button>');
//Escuchamos el evento click del botón agregado
$("#btn-enviar").click(() => { 
  
    fetch(URLGET)
    .then(respuesta => respuesta.json ())
    .then(respuesta => console.log(respuesta))
    
});

