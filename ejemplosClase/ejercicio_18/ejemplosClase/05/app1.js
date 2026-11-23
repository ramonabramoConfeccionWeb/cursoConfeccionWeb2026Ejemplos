
// crearme un objeto llamado utilidades con los metodos mas utilizados
const utilidades = {
    // dibujar los datos en un elemento html
    render(registro, selector){
        const destino = document.querySelector(selector);
        
        destino.innerHTML += `
            <li class="registro">
            <span class="dato">${registro.nombre}</span>
            <span class="dato">${registro.nota}</span>
            </li>`;
    }
    
}




// una constante que apunte a cada elemento del body

const nombre = document.querySelector('#nombre');
const nota = document.querySelector('#nota');
const formulario=document.querySelector('form');
const botonListar = document.querySelector('#botonListar');
const botonLimpiar = document.querySelector('#botonLimpiar');
const lista = document.querySelector('#lista');

// para controlar el envion del formulario
// esto me permite controlar el click sobre el boton guardar
// que es de tipo submit
formulario.addEventListener('submit', (evento) => {
    //  paro el envio del formulario
    evento.preventDefault();
    
    // creo un objeto con los datos del alumno
    const alumno = {
        nombre: nombre.value,
        nota: nota.value
    };
    
    
    
});


