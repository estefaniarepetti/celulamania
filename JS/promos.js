//Productos //
/*

const productos2 = [{
    id: 1,
    nombre: "Iphone X",
    precio: "$125.000",
    cuotas: "6 cuotas sin interes",
    detalle: "Pantalla plegable con una extensión total de 7.6 y resolución de 1768px x 2208px.",
    img: "../imagenes/celular2.png"
}
 

// Recorro For y creo divs//

    for (let producto of productos2) {

    $(".section__grid2").append(`
           
        <div class="grid__imgSecundarias">
        <img src="${producto.img}" class="imgSecundarias__secundaria" alt="Samsung S21">
    </div>
    <div class="grid__datos">
        <h2>${producto.nombre}</h2>

        <p class="datos__precio">${producto.precio}</p>

        <div class="datos__descripcion">
            <p> ${producto.detalle}</p>
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
        <div class="datos__inputs">
        <button type="button" class="btn btn-outline-success">Comprar</button>
     
            <div class="datos__button">
            <button type="button" class="btn btn-outline-light" id="modelos"> Ver otros modelos </button>
        </div>
            </div>

        </div>`);

    }
