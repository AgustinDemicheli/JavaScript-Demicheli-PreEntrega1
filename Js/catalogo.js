const carrito = document.getElementById('carrito');
const carritoModal = document.getElementById('carrito-modal');
const detalleModal = document.getElementById('detalle-modal');
const detalleNombre = document.getElementById('detalle-nombre');
const detallePrecio = document.getElementById('detalle-precio');
const detalleDescripcion = document.getElementById('detalle-descripcion');
const agregarAlCarritoButton = document.getElementById('agregar-al-carrito');
const totalPrecio = document.getElementById('total-precio');

// Objeto para rastrear los productos en el carrito
const carritoProductos = {};

// Función para mostrar el detalle de un producto
function verDetalle(nombre, precio, descripcion) {
    detalleNombre.textContent = nombre;
    detallePrecio.textContent = precio;
    detalleDescripcion.textContent = descripcion;
    agregarAlCarritoButton.onclick = function () {
        agregarAlCarrito(nombre, precio);
        cerrarDetalle();
    };
    detalleModal.style.display = 'block';
}

// Función para cerrar el detalle del producto
function cerrarDetalle() {
    detalleModal.style.display = 'none';
}

// Función para agregar productos al carrito y mostrar una alerta
function agregarAlCarrito(nombre, precio) {
    if (carritoProductos[nombre]) {
        carritoProductos[nombre].cantidad++;
    } else {
        carritoProductos[nombre] = {
            precio: precio,
            cantidad: 1
        };
    }

    actualizarCarrito();
    alert(`Has agregado el producto: ${nombre} al carrito.`);
}

// Función para calcular el total del precio en el carrito
function calcularTotal() {
    let total = 0;
    for (const nombre in carritoProductos) {
        total += carritoProductos[nombre].precio * carritoProductos[nombre].cantidad;
    }
    return total;
}

// Función para actualizar el contenido del carrito y el total
function actualizarCarrito() {
    carrito.innerHTML = '';
    for (const nombre in carritoProductos) {
        const producto = carritoProductos[nombre];
        const carritoItem = document.createElement('li');
        carritoItem.innerHTML = `
            ${nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}
            <button onclick="aumentarCantidad('${nombre}')">+</button>
            <button onclick="disminuirCantidad('${nombre}')">-</button>
            <button onclick="eliminarDelCarrito('${nombre}')">Eliminar</button>
        `;
        carrito.appendChild(carritoItem);
    }
    totalPrecio.textContent = calcularTotal();
}

// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(nombre) {
    carritoProductos[nombre].cantidad++;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(nombre) {
    if (carritoProductos[nombre].cantidad > 1) {
        carritoProductos[nombre].cantidad--;
    } else {
        // Si la cantidad llega a 1, eliminamos el producto del carrito
        eliminarDelCarrito(nombre);
    }
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    delete carritoProductos[nombre];
    actualizarCarrito();
}

// Función para mostrar el carrito como un modal
function mostrarCarrito() {
    actualizarCarrito();
    carritoModal.style.display = 'block';
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
    carritoModal.style.display = 'none';
}

// Función para realizar el pago
function realizarPago() {
    alert('Pago realizado exitosamente. Gracias por su compra.');
    carritoProductos = {}; // Vaciar el carrito después del pago
    actualizarCarrito();
    cerrarCarrito();
}