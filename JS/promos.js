var carrito = JSON.parse(localStorage.getItem("carrito"));

if (carrito == null) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

console.log("carrito:");
console.log(carrito);

const precios = [];



//Productos// 

const productos = [{
    id: "1",
    nombre:"Iphone X",
    precio: "$125.000",
    cuotas: "6 cuotas sin interes",
    img: "../imagenes/celular2.png"
},
]

// IMPRIME CARDS DEL PRODUCTO EN EL CARRITO

function imprimirCardsCarrito() {

    $("#section__grid2").html(``);

    for (let producto of productos) {

        $("#section__grid2").append( `
           
        <div class="grid__imgSecundarias">
        <img src="${producto.img}" class="imgSecundarias__secundaria" alt="Samsung S21">
    </div>
    <div class="grid__datos">
        <h2>${producto.nombre}</h2>

        <p class="datos__precio">${producto.precio}</p>

        <div class="datos__button">
            <button type="button" class="btn btn-outline-light"> <i class="fas fa-heart" id="button__heart" alt="icono favoritos"> Agregar a favoritos </i></button>
        </div>

        <div class="datos__descripcion">
            <p>Pantalla plegable con una extensión total de "7.6" 
              y resolución de 1768px x 2208px.
            </p>
        </div>
        
        <div class="datos__selects">
            <label for="talle">Color:</label>
            <select name="talle" id="talle" class="form-select">
                <option value="B">Blanco</option>
                <option value="N">Negro</option>
                <option value="A">Azul</option>
            </select>
        
            <label for="cantidad">Cantidad:</label>
            <select name="cantidad" id="cantidad" class="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>



        <div class="cardArticulo__subtotal">
            <p id="subtotal${producto.id}" class="shoppingCartTItem"><b>Total:</b> $${producto.precio}</p>
        </div>
        <div class="cardArticulo__cancel">
            <button type="button" class="shoppingCartTItem" onclick="quitarDelCarrito('${producto.id}')">Eliminar <img src="../Multimedia/iconos/times-solid.svg" class="cardArticulo__icono" alt="icono cruz"></button>
        </div>
        </div>`);

        precioTotal(producto.precio, producto.id);
    }

    if(carrito.length == 0){

        // Borra boton de comprar
        $("#carrito-comprar").html(``);

        // Imprime mensaje
        $("#carrito-section__grid").html(
        `<div class="carrito__vacio">
        <p><b>NO TIENES PRODUCTOS EN EL CARRITO.</b></p>
        </div>`);
    }
} 


// AGREGAR PRODUCTO AL CARRITO

function agregarAlCarrito(id) {

    SAAgregarCarrito();

    console.log("carrito:");
    console.log(carrito);

    $(`#${id}`).fadeOut("normal");
    const productFoundBDD = BDD.find(producto => producto.id === id);

    // Verifica si el producto ya está en el carrito
    const productFoundCart = carrito.find(producto => producto.id === id);

    // Verifica que el producto existe, y si el producto no se encuentra en él.
    if (productFoundBDD != undefined && productFoundCart == null) {

        carrito.push(productFoundBDD);
        guardarCarrito();
    }
}


// QUITAR PRODUCTO DEL CARRITO

function quitarDelCarrito(id) {

    SAQuitarCarrito();

    carrito = carrito.filter(producto => producto.id !== id);
    $(`#producto${id}`).slideUp(250, () =>{

        imprimirCardsCarrito();
    });

    guardarCarrito();

    console.log("carrito:");
    console.log(carrito);

    // Actualizar precio total
    precios[id] = 0;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total)

}


// GUARDAR CARRITO EN LOCAL STORAGE

function guardarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// CALCULAR PRECIO TOTAL

function precioTotal(precio, id) {

    // Subtotales
    let cantidad = $(`#cantidad${id}`).val();
    let subtotal = cantidad * precio;
    $(`#subtotal${id}`).html(`<b>Subtotal:</b> $` + subtotal);

    // Sumar subtotales
    precios[id] = subtotal;
    let total = precios.reduce((a, b) => Number(a) + Number(b), 0);
    $("#precioTotal").html(total);
}
