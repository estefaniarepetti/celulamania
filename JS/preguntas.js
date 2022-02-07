const productos = [{
    id: 1,
    nombre: "Iphone 12",
    precio: "$132.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/iphoneX.png",
    direccion: "../celulares/samsung.html"
},
{
    id: 2,  
    nombre: "Galaxy Z Fold3 5G Negro",
    precio: "$254.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/galaxyZ.png" 
},
{
    id: 3,
    nombre: "Motorola Moto E7i Power - Azul",
    precio: "$99.000,0",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png" 
},
{
    id: 4,
    nombre: "Xiaomi Note 10",
    precio: "$62.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular5.png" 
},

{
    id: 5,
    nombre: "Xiaomi",
    precio: "$100.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular1.png",

},

{
    id: 6,
    nombre: "Iphone 12",
    precio: "$120.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular7.png" 
},


];


// Recorremos el array con for..of
for (const producto of productos) {

    $(".promociones__row").append(`                  
    <div class="promociones__four">
      <div class="promociones__tarjeta"> 
        <img src="${producto.imagen}"class="imagen-curso u-full-width">
      </a>
        <div class="info-card">
        <p class="precio"> ${producto.precio}</p>
        <h4> <a href="${producto.direccion}">${producto.nombre} </a></h4>
            <p class="cuotas">${producto.cuotas}</p>
        
           
        </div>
        </div>
        </div>
        `);
}

$(".preguntas__inicio").prepend(`<h2 style="display: none" >¡Preguntas Frecuentes!</h2> `)
$("h2").fadeIn(4000);

$("h2").css({
    "padding":"10px",
});

/*Envio */

$(".envios").prepend(`<h2 style="display: none" >¡Informacion Sobre Envios!</h2> `)
$("h2").fadeIn();
