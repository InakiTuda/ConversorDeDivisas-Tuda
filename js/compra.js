// Array para el carrito de compras
const carrito = []

// Ordenar productos de menor a mayor
const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

// Ordenar productos de mayor a menor
const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaDeProductos = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    })
    alert('Lista de precios:'+'\n\n'+listaDeProductos.join('\n'))
    comprarProductos(listaDeProductos)
};

const comprarProductos = (listaDeProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('¿Qué moneda desea comprar?'+'\n\n'+listaDeProductos.join('\n'))
        productoCantidad = parseInt(prompt('¿Cuánto queres comprar?'))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('No es posible comprar esa moneda!')
        }

        otroProducto = confirm('Desea agregar otra moneda?')
    } while (otroProducto);

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad
    }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return '- '+producto.nombre+' | Cantidad: '+producto.cantidad
    })

    const isCheckout = confirm('Checkout: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nPara continuar presione "Aceptar" sino "Cancelar" para eliminar un producto del carrito'
    )

    if (isCheckout) {
        finalizarCompra(listaProductos)
    } else {
        const nombreProductoAEliminar = prompt('Ingrese el nombre de la moneda a eliminar:')
        eliminarProductoCarrito(nombreProductoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert('Detalle de su compra: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nTotal: '+cantidadTotal
        +'\n\nEl total de su compra es: '+precioTotal
        +'\n\nGracias por su compra!'
    )
};

const comprar = () => {
    const productosBaratos = confirm('¿Querés ordenar la lista de monedas del más barato al más caro?')

    if (productosBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


comprar()
