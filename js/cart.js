let carrito = []

const productoContenedor = document.getElementById("producto-contenedor")

productoContenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar")) {
        validarProductoRepetido(e.target.id)
    }
})

const validarProductoRepetido = (productoId) => {
    const producto = productos.find(producto => producto.id == productoId)
    carrito.push(producto)
    console.log(producto)

    if (!productoRepetido) {
        const producto = productos.find(producto => producto.id == productoId)
        carrito.push(producto)
        pintarProductoCarrito(producto)
    } else {
        productoRepetido.cantidad++
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido}.id`)
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotalesCarrito(carrito)
    }
};

const pintarProductoCarrito = (producto) => {
    const contenedor = document.getElementById("carrito-contenedor")
    const div = document.createElement("div")
    div.classList.add("productoEnCarrito")
    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
};

