const productos = [{
    id: 1,
    nombre: "Iphone 12",
    precio: "$132.000",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/phone.png",
    direccion: "../celulares/iphone12.html"
},
{
    id: 2,  
    nombre: "Samsung Galaxy Z Fold3",
    precio: "$254.999",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/galaxyZ.png",
    direccion: "../celulares/samsuggalaxy.html"
},
{
    id: 3,
    nombre: "Motorola Moto E7i Power",
    precio: "$21.999",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/celular3.png",
    direccion: "../celulares/motorola.html"
},
{
    id: 4,
    nombre: "Xiaomi Note 10",
    precio: "$62.999",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/celular5.png",
    direccion: "../celulares/xioaminote.html"
},

{
    id: 5,
    nombre: "Samsung A52",
    precio: "$64.999",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/phone2.png",
    direccion: "../celulares/samsunga52.html"

},

{
    id: 6,
    nombre: "One Plus Nord100",
    precio: "$59.850",
    cuotas: "6 cuotas sin interes",
    imagen: "../imagenes/phone3.png",
    direccion: "../celulares/oneplus.html"
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
        <p class="precio1"> ${producto.precio}</p>
        <h4> <a href="${producto.direccion}">${producto.nombre} </a></h4>
            <p class="cuotas1">${producto.cuotas}</p>
        
           
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


//como comprar //

$(".como__detalle").prepend(`<h2 style="display: none" >¿Como Comprar ?</h2> `)
$("h2").fadeIn(3000);


$(".promo").prepend(`<h2 class="promo__p" style="display: none" >Promociones</h2> `)
$("h2").fadeIn(2000);
