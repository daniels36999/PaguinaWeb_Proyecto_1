// Año actual
const anio = new Date().getFullYear();

// Crear los elementos
const p = document.createElement('p');
p.className = 'copyrigth';

const texto = document.createTextNode(`Todos los derechos reservados © ${anio} | `);
p.appendChild(texto);

const button = document.createElement('button');
button.textContent = 'Daniels Yautibug';
button.onclick = () => clicEnlace('https://github.com/daniels36999');
p.appendChild(button);

// Función para el clic del enlace
function clicEnlace(url) {
    window.location.href = url;
}

// Insertar en el DOM
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').appendChild(p);
});