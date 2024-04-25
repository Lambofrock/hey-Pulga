
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategoria= document.querySelectorAll(".boton-categoria")

function cargarProductos(){
productos.forEach(producto =>{

    let div = document.createElement("div");
    div.classList.add("producto")
    div.innerHTML= `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}" >agregar</button>
    </div>
    `;
    contenedorProductos.append(div);

})

}
cargarProductos ();

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click", (e) => {
        
        botonesCategoria.forEach(boton => boton.classList.remove ("boton-menu-active")),

        e.currentTarget.classList.add("boton-menu-active")
    })

    }
)

 