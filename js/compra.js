const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `
                       `
      contenedor.appendChild(div);
    });
  };