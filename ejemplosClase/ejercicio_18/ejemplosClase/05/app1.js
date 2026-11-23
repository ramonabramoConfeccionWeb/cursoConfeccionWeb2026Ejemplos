
// crearme un objeto llamado utilidades con los metodos mas utilizados
const utilidades = {
    // dibujar los datos en un elemento html
    render(registro, selector){
        // apunto al elemento destino donde voy a dibujar el registro
        const destino = document.querySelector(selector);
        
        // creo el html con los datos del registro
        destino.innerHTML = `
            <li class="registro">
            <span class="dato">${registro.nombre}</span>
            <span class="dato">${registro.nota}</span>
            </li>`;
    }

    renderDinamico(registro, selector) {
        // apunto al elemento destino donde voy a dibujar el registro
        const destino = document.querySelector(selector);

        // dibujar los datos del registro

        // creo el elemento li
        const li = document.createElement('li');
        // creo los elementos span
        const spanNombre = document.createElement('span');
        const spanNota = document.createElement('span');
        // añado a los span creados el texto del registro
        spanNombre.textContent = registro.nombre;
        spanNota.textContent = registro.nota;
        // añado los span al li
        li.appendChild(spanNombre);
        li.appendChild(spanNota);

        // añado el li al destino
        destino.appendChild(li);


    }
    
}




// una constante que apunte a cada elemento del body

const nombre = document.querySelector('#nombre');
const nota = document.querySelector('#nota');
const formulario=document.querySelector('form');
const botonListar = document.querySelector('#botonListar');
const botonLimpiar = document.querySelector('#botonLimpiar');


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
    
    utilidades.render(alumno, '#lista');
    
});


