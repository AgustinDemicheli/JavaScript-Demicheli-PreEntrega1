document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () =>{
    try {
        const res = await fetch('api.json')
        const data = await res.json()
    } catch(error){
        console.log(error)
    }
}

document.querySelector('.admin-h1').textContent = 'Software Market - ADMIN'

const softwareList = [];
const listaSoftware = document.getElementById('lista-software');
const detalleSoftware = document.getElementById('detalle-software');
const nombreSpan = document.getElementById('nombre-software');
const versionSpan = document.getElementById('version-software');
const descripcionSpan = document.getElementById('descripcion-software');

function preguntarNombreApellido() {
    let nombre = prompt('Por favor, ingrese su nombre:');
    let apellido = prompt('Por favor, ingrese su apellido:');

    while (!nombre || !apellido) {
        alert('Por favor, complete tanto el nombre como el apellido.');
        nombre = prompt('Por favor, ingrese su nombre:');
        apellido = prompt('Por favor, ingrese su apellido:');
    }

    alert('Bienvenido, ' + nombre + ' ' + apellido + '!');
}

function agregarSoftware(nombre, version, descripcion) {
    const software = { nombre, version, descripcion };
    softwareList.push(software);
    actualizarLista();
}

function actualizarLista() {
    listaSoftware.innerHTML = '';
    softwareList.forEach((software, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = software.nombre;
        listItem.addEventListener('click', () => mostrarDetalle(index));
        listaSoftware.appendChild(listItem);
    });
}

function mostrarDetalle(index) {
const software = softwareList[index];
nombreSpan.textContent = software.nombre;
versionSpan.textContent = software.version;
descripcionSpan.textContent = software.descripcion;
if (detalleSoftware.style.display === 'none') {
detalleSoftware.style.display = 'block';
} else {
detalleSoftware.style.display = 'none';
}
eliminarButton.style.display = 'block';

eliminarButton.onclick = function() {
eliminarSoftware(index);
};
}
const eliminarButton = document.getElementById('eliminar-software');


function eliminarSoftware(index) {
softwareList.splice(index, 1);
detalleSoftware.style.display = 'none';
eliminarButton.style.display = 'none'; 
actualizarLista(); 
}





const botonAgregar = document.getElementById('agregar-software');
botonAgregar.addEventListener('click', () => {
let nombre, version, descripcion;
nombre = prompt('Nombre del software:');
if (nombre === null || nombre === '') {
return;
}
version = prompt('Versión:');
if (version === null) {
return; 
}
descripcion = prompt('Descripción:');
if (descripcion === null) {
return; 
}    
agregarSoftware(nombre, version, descripcion);
});

agregarSoftware('Software 1', '1.0', 'Esta es la descripción del Software 1');
agregarSoftware('Software 2', '2.0', 'Esta es la descripción del Software 2');


agregarSoftware('Software 1', '1.0', 'Esta es la descripción del Software 1');
agregarSoftware('Software 2', '2.0', 'Esta es la descripción del Software 2');


const faqData = [
    { pregunta: "¿Cómo puedo cambiar mi contraseña?", respuesta: "Puede cambiar su contraseña en la página de configuración de su cuenta." },
    { pregunta: "¿Qué métodos de pago se aceptan?", respuesta: "Aceptamos tarjetas de crédito y PayPal como métodos de pago." },
    { pregunta: "¿Cómo contacto al soporte técnico?", respuesta: "Puede ponerse en contacto con nuestro soporte técnico a través del formulario de contacto en la página de soporte." }
];

function mostrarPreguntasFrecuentes() {
    const faqList = document.getElementById('faq-list');
    
    for (let i = 0; i < faqData.length; i++) {
        const pregunta = faqData[i].pregunta;
        const respuesta = faqData[i].respuesta;
        
        const li = document.createElement('li');
        const preguntaElement = document.createElement('h3');
        const respuestaElement = document.createElement('p');
        
        preguntaElement.textContent = pregunta;
        respuestaElement.textContent = respuesta;
        respuestaElement.classList.add('respuesta');
        preguntaElement.addEventListener('click', function() {
            if (respuestaElement.style.display === 'none') {
                respuestaElement.style.display = 'block';
            } else {
                respuestaElement.style.display = 'none';
            }
        });
        
        li.appendChild(preguntaElement);
        li.appendChild(respuestaElement);
        
        faqList.appendChild(li);
    }
}

mostrarPreguntasFrecuentes();
window.onload = preguntarNombreApellido;