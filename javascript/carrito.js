let productosEnCarrito= localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)

const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contonedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-vacio");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {


        contonedorCarritoProductos.innerHTML = "";
        { }
        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-productos")
            div.innerHTML = `
            <div id="carrito-productos" class="carrito-productos">

              <div class="carrito-producto">
               <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
             
              <div class="carrito-titulo">
                <small>titulo</small>
                <h3>${producto.titulo}</h3>
              </div>

             <div class="carrito-producto-cantidad">
                 <small>cantidad</small>
                <p>${producto.cantidad}
                </p>
             </div>
             <div class="carrito-producto-precio">
                 <small>precio</small>
                 <p>${producto.precio}</p>
             </div>
             <div class="carrito-producto-subtotal">
                <small>subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
             </div>
             <button class="carrito-producto-eliminar" id= ${producto.id}><i class="bi bi-trash"></i></button>
             </div>
            `

            contonedorCarritoProductos.append(div);
        })
            ;
            actualizarBotonesEliminar()
           
    }
 
    cargarProductosCarrito();
};



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    let idboton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idboton);
    productosEnCarrito.slice(index, 1);

    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
   
  
}



botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito()
}

