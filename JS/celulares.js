//SECCION CELULARES- MARCAS 

const marcaCelus = [{
    id: 1,
    nombre: "samsung",
    imagen: "../imagenes/logo3.png",
    },
    {
    id:2 ,
    nombre:"xiaomi",
    imagen: "../imagenes/logo4.png"
    },
    {
        id:3,
        nombre:"oneplus",
        imagen: "../imagenes/logo5.png"
    },
    {
        id:4,
        nombre:"motorola",
        imagen: "../imagenes/logo6.png",
    },
    {
        id:5,
        nombre:"huawei",
        imagen: "../imagenes/logo1.png"
    },
    {
        id:6,
        nombre:"iphone",
        imagen: "../imagenes/logo2.png"
    }
    ];
    
    for (const producto of marcaCelus) {
        $(".section__grid1").append(`
        <div class="grid__cardMarca" id="${producto.id}">
        <a href="">
        <img src="${producto.imagen}" class='cardMarca__logoImg' "alt="producto" />
        </a>    
        </div>
          
        `) ;
    }




    /*Accesorios */


const productos = [{

    id: 1,
    imagen: "../imagenes/accesorio1.png"
},
{
    id: 2,
    imagen: "../imagenes/accesorio2.png",
}

];

for (const producto of productos) {

    $("#accesorios").append(`

    <div class="accesorios__imagen"> 
    <div data-aos="fade-right">
    <img src="${producto.imagen}">
    </div>
    </div>

    

    `);

}

$("#accesorios").css({
   
    "text-align":"center"
});

$(".accesoriosTitulo").css({
   "font-family": "'Inter', sans-serif",
});

$(".accesorios__imagen").css({
    "display":"flex",
    "flex-direction": "row",
    "justify-content": "space-around ",
    "align-items": "center",
    "width": "100%",
    "padding": "1rem",
    
    "color":"#fafafa",
    "margin": "1rem 0" ,

});

