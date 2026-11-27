class Mascota {
    constructor(nombre, especie, edad, vacunado = true) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.vacunado = vacunado;
    }
    cumplirAnios() {
        this.edad++;
    }

    obtenerFicha() {
        let salida = '';
        salida += '<ul class="mascota">';
        salida += `<li><span>Nombre:</span> ${this.nombre}</li>`;
        salida += `<li><span>Especie:</span> ${this.especie}</li>`;
        salida += `<li><span>Edad:</span> ${this.edad}</li>`;
        salida += `<li><span>Vacunado:</span> ${this.vacunado}</li>`;
        salida += '</ul>';
        return salida;
    }

    toString() {
        return this.obtenerFicha();
    }
}

class Veterinario {
    constructor(nombre, especialidad, numColegiado, enServicio = true) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.numColegiado = numColegiado;
        this.enServicio = enServicio;
    }

    atender() {
        return 'estoy contigo';
    }

    cambiarTurno() {
        return 'cambio de turno';
    }

    obtenerFichaSencillo() {
        let salida = '<ul class="veterinario1">';
        salida += `<li><span>Nombre</span>: ${this.nombre}</li>`;
        salida += `<li><span>Especialidad</span>: ${this.especialidad}</li>`;
        salida += `<li><span>Número de colegiado</span>: ${this.numColegiado}</li>`;
        salida += `<li><span>En servicio</span>: ${this.enServicio}</li>`;
        salida += `</ul>`;
        return salida;
    }

    obtenerFicha() {
        const ul = document.createElement('ul');
        ul.classList.add('veterinario1');

        const liNombre = document.createElement('li');
        const spanNombre = document.createElement('span');
        spanNombre.textContent = 'Nombre:';
        liNombre.appendChild(spanNombre);
        liNombre.innerHTML += this.nombre;

        const liEspecialidad = document.createElement('li');
        const spanEspecialidad = document.createElement('span');
        spanEspecialidad.textContent = 'Especialidad:';
        liEspecialidad.appendChild(spanEspecialidad);
        liEspecialidad.innerHTML += this.especialidad;

        const liColegiado = document.createElement('li');
        const spanColegiado = document.createElement('span');
        spanColegiado.textContent = 'Número de colegiado:';
        liColegiado.appendChild(spanColegiado);
        liColegiado.innerHTML += this.numColegiado;

        const liEnservicio = document.createElement('li');
        const spanEnservicio = document.createElement('span');
        spanEnservicio.textContent = 'En servicio:';
        liEnservicio.appendChild(spanEnservicio);
        liEnservicio.innerHTML += this.enServicio;


        ul.append(liNombre, liEspecialidad, liColegiado, liEnservicio);
        return ul;
    }

    toString() {
        // return this
        //     .obtenerFicha() // obtengo todos los datos del veterinario como un objeto ul
        //     .outerHTML; // convierto el objeto ul a string

        // return this.obtenerFichaSencillo();

        // return this.obtenerFicha1().outerHTML;

        return this.obtenerFicha2().firstElementChild.outerHTML;

    }

    obtenerNombre() {
        const plantilla = document.querySelector('#plantillaCampo')
        const label = plantilla.content.querySelector('.label')
        const valor = plantilla.content.querySelector('.value')
        label.textContent = 'Nombre';
        valor.textContent = this.nombre;
        return plantilla.content.cloneNode(true);
    }

    obtenerEspecialidad() {
        const plantilla = document.querySelector('#plantillaCampo')
        const label = plantilla.content.querySelector('.label')
        const valor = plantilla.content.querySelector('.value')
        label.textContent = 'Especialidad';
        valor.textContent = this.especialidad;
        return plantilla.content.cloneNode(true);
    }

    obtenerColegiado() {
        const plantilla = document.querySelector('#plantillaCampo')
        const label = plantilla.content.querySelector('.label')
        const valor = plantilla.content.querySelector('.value')
        label.textContent = 'Colegiado';
        valor.textContent = this.numColegiado;
        return plantilla.content.cloneNode(true);

    }

    obtenerServicio() {
        const plantilla = document.querySelector('#plantillaCampo');
        const label = plantilla.content.querySelector('.label');
        const valor = plantilla.content.querySelector('.value');
        label.textContent = 'Servicio';
        valor.textContent = this.enServicio;
        return plantilla.content.cloneNode(true);
    }

    obtenerFicha1() {
        const liNombre = this.obtenerNombre();
        const liEspecialidad = this.obtenerEspecialidad();
        const liColegiado = this.obtenerColegiado();
        const liServicio = this.obtenerServicio();
        const ul = document.createElement('ul');
        ul.classList.add('veterinario');
        ul.append(liNombre, liEspecialidad, liColegiado, liServicio);
        return ul;
    }

    obtenerFicha2() {
        const plantilla = document.querySelector('#plantillaVeterinario');
        const valores = plantilla.content.querySelectorAll('span.value');
        valores[0].textContent = this.nombre;
        valores[1].textContent = this.especialidad;
        valores[2].textContent = this.numColegiado;
        valores[3].textContent = this.enServicio;
        return plantilla.content.cloneNode(true);

    }

}

const mascota1 = new Mascota(
    'Toby',
    'perro',
    4,
    true
);

const mascota2 = new Mascota(
    'Luna',
    'Gato',
    2,
    true
);

const mascota3 = new Mascota(
    'Nemo',
    'Tortuga',
    12,
    false
);

const vet1 = new Veterinario(
    'Dra. Elena Ruiz',
    'Exóticos',
    'COL-1042',
    true
);

const vet2 = new Veterinario(
    'Dr. Marcos Soler',
    'Exóticos',
    'COL-2089',
    false
);

const vet3 = new Veterinario(
    'Dra. Sofia Vega',
    'Dermatologia',
    'COL-3115',
    true
);

const divSalida = document.querySelector('#salida');
divSalida.innerHTML = '<h2>Mascotas</h2>';

divSalida.innerHTML += mascota1;
divSalida.innerHTML += mascota2.obtenerFicha();
divSalida.innerHTML += mascota3;

divSalida.innerHTML += '<h2>Veterinarios</h2>';

divSalida.innerHTML += vet1;
divSalida.innerHTML += vet2;
divSalida.innerHTML += vet3;



