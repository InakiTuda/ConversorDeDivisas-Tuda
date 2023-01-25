let carrito = []

const productoContenedor = document.getElementById("producto-contenedor")

productoContenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar")) {
        validarProductoRepetido(e.target.id)
    }
})

const validarProductoRepetido = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId)

    if (!productoRepetido) {
        const producto = carrito.find(producto => producto.id == productoId)
        console.log(producto)
    }
}