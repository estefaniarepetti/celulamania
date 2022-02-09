
const productos = [{
    id: 1,
    nombre: "Iphone X",
    precio: "$125.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular2.png"
},
{
    id: 2,
    nombre: "Samsung S21",
    precio: "$95.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png" 
},
{
    id: 3,
    nombre: "Motorola Moto E7i Power - Azul",
    precio: "$99.000,0",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular4.png" 
},
{
    id: 4,
    nombre: "6 Cuotas sin interes",
    precio: "$100.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular5.png" 
},

{
    id: 5,
    nombre: "One plus 100",
    precio: "$100.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/oneplus101.png" 
},

{
    id: 6,
    nombre: "Iphone 12",
    precio: "$120.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular7.png" 
},

{
    id: 7,
    nombre: "Xiaomi Redmi Note 10S",
    precio: "$62.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular6.png" 
},
{
    id: 8,
    nombre: "Xiaomi Poco X3 PRO 128 GB Azul",
    precio: "$82.077",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular1.png" 
},
{
    id: 9,
    nombre: "Iphone SE (128GB)",
    precio: "$99.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png"
},
{
    id: 10,
    nombre: "Iphone SE (128GB)",
    precio: "$99.999",
    cuotas: "6 cuotas sin interes",
    imagen:"/imagenes/celular7.png" 
},
{
    id: 11,
    nombre: "Iphone SE (128GB)",
    precio: "$99.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png"
},
{
    id: 12,
    nombre: "Iphone SE (128GB)",
    precio: "$99.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular2.png"
}

];


// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $(".row").append(`                  
    <div class="four columns">
      <div class="card1"> 
        <img src="${producto.imagen}"class="imagen-curso u-full-width">
      </a>
        <div class="info-card">
            <h4>${producto.nombre} X</h4>
            <p class="cuotas">${producto.cuotas}</p>
            <p class="precio"> ${producto.precio}</p>
            <a href="" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
        </div>
        </div>
        </div>

  `);

    //Asociamos el evento a botón recién creado.
   // $(`#btn${producto.id}`).on('click', function () {
      //  console.log(`añadiste ${producto.nombre}`);
   // });
 
}

$("h4").css({"font-family": "Roboto-Regular,sans-serif",
"font-size": "16px",
"line-height": "24px",
"text-align": "left",
"margin-bottom":"0",
"overflow": "hidden",
"color":"#4a4a68",
});

$(".cuotas").css({
    "flex-grow":"0",
    "font-family":"Roboto-Regular,sans-serif",
    "font-size": "14px",
    "line-height": "22px",
    "text-align":"left",
    "color":"#5b51e9",
    "margin-top":"4px",
    "margin-bottom":"8px",
});


$(".precio").css({
    "font-family":"Roboto-Regular,sans-serif",
    "font-size": "24px",
    "line-height": "30px",
    "text-align":"left",
    "margin":"0",
    "color":"0e0e2c",
})

/* carrito 3 */

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-celus');
const listaCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{
    //atento a cuando se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //eliminar curso en el carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar carrit de compras
    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    //mostrar lista de cursos en carrito de compra al cargar DOM-LS
    document.addEventListener('DOMContentLoaded', leerLS)



}


function comprarCurso(e) 
{
    e.preventDefault();
    //delegation para agregar carrito
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        //enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }    
}


//leer Datos del Curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent ,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCurso(infoCurso);
}

// insertar Curso en el carrito
function insertarCurso(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
            
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);

}

//eliminar curso del carrito en el DOM
function eliminarCurso(e) 
{
    e.preventDefault();

    let curso, cursoId;

    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    curso = e.target.parentElement.parentElement;
    cursoId = curso.querySelector('a').getAttribute('data-id');   
    eliminarCursoLS(cursoId);
}



//vacias Carrito
function vaciarcarrito() 
{
    //listaCursos.innerHTML = '';
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }    
    //vaciar carrito  de LS
    vaciarLs();

    return false;    
}


/*
function precioTotal(precio, id) {
  
    // Sumar subtotales
    let precios = $(`.precio${id}`).val();
    let subtotal = precio + precio;
    precios[id] = subtotal;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total);
}
*/



//almacenar curso al LS
function guardarCursoLocalStorage(curso)
{
    let cursos;
    cursos = obtenerCursosLocalStorage();
    //El curso seleccionado se agrega al Array
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


//comprobar que hayan elementos en el LS
function obtenerCursosLocalStorage() 
{
    let cursosLS;
    //comprobamos si no hay naad o es nulo, creamos el array vacío
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];        
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

//pinta los cursos desde LS en el carrito
function leerLS() 
{
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (curso) {
        //Construimos el template
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>    
    `;
        listaCursos.appendChild(row);

    })
}

//eliminar curso del LS
function eliminarCursoLS(curso) 
{
    let cursosLS;
    //obtnemos el arreglo con los cursos
    cursosLS = obtenerCursosLocalStorage();
    //iteramo para buscar coincidencias y eliminar
    cursosLS.forEach(function(cursoLS, index) {
      if (cursoLS.id === curso) {
        cursosLS.splice(index, 1);
      }
    });

    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}

//eliminar todos los cursos del LS
function vaciarLs() {
    localStorage.clear();
}
