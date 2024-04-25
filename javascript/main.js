
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategoria = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}" >agregar</button>
    </div>
    `;
        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
  

}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove("boton-menu-active")),
            e.currentTarget.classList.add("boton-menu-active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }
        else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }

    })
})
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

}
const productosEnCarrito = []

function agregarAlCarrito(e) {

    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idboton)
    if (productosEnCarrito.some(producto => producto.id === idboton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idboton);
       productosEnCarrito[index].cantidad++;

    }
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
       

    }
 
actualizarNumero();
} 
function actualizarNumero(){
    let nuevoNumero = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0);
    nuevoNumero.innerText = nuevoNumero;

}