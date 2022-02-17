
/*

const productos = [{
    id: 1,
    nombre: "Iphone X",
    precio: "125.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular2.png"
},
{
    id: 2,
    nombre: "Samsung S21",
    precio: "95.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png" 
},
{
    id: 3,
    nombre: "Motorola Moto E7i Power - Azul",
    precio: "99.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular4.png" 
},
{
    id: 4,
    nombre: "6 Cuotas sin interes",
    precio: "100.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular5.png" 
},

{
    id: 5,
    nombre: "Xiaomi",
    precio: "100.000",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular1.png" 
},

{
    id: 6,
    nombre: "Iphone 12",
    precio: "120.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular7.png" 
},

{
    id: 7,
    nombre: "Xiaomi Redmi Note 10S",
    precio: "62.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular6.png" 
},
{
    id: 8,
    nombre: "Xiaomi Poco X3 PRO 128 GB Azul",
    precio: "82.077",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular1.png" 
},
{
    id: 9,
    nombre: "Iphone SE (128GB)",
    precio: "99.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png"
},
{
    id: 10,
    nombre: "Iphone SE (128GB)",
    precio: "99.999",
    cuotas: "6 cuotas sin interes",
    imagen:"/imagenes/celular7.png" 
},
{
    id: 11,
    nombre: "Iphone SE (128GB)",
    precio: "99.999",
    cuotas: "6 cuotas sin interes",
    imagen: "/imagenes/celular3.png"
},
{
    id: 12,
    nombre: "Iphone SE (128GB)",
    precio: "99.999",
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
            <h4>Iphone X</h4>
            <p class="cuotas">${producto.cuotas}</p>
            <p class="precio" >$ ${producto.precio}</p>
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

/* carrito 3 

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
    $("#precioTotal").html("");
    $("#precioTotal").html(precioTotal);
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



function precioTotal() {
  
    let resultado = 0 ;
    let datosLocalStorage = obtenerCursosLocalStorage ();
    resultado = datosLocalStorage.reduce((x, currentValue) => x.precio + currentValue , 0 );
    return resultado;

}






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

/*

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.precioTotal');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
     
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
  } 

  */



  /* CARRITO NUEVO */



  const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
