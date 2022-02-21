//Productos// 

const productos = [{
    id: "1",
    nombre: "Iphone X",
    precio: "$125.000",
    cuotas: "6 cuotas sin interes",
    img: "../imagenes/celular2.png"
}, ]

// Recorro For y creo divs//

    for (let producto of productos) {

    $("#section__grid2").append(`
           
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

    }

    if (carrito.length == 0) {

        // Borra boton de comprar
        $("#carrito-comprar").html(``);

        // Imprime mensaje
        $("#carrito-section__grid").html(
            `<div class="carrito__vacio">
        <p><b>NO TIENES PRODUCTOS EN EL CARRITO.</b></p>
        </div>`);
    }

