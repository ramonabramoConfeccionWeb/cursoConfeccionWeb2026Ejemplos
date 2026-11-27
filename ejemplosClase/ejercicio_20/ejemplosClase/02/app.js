class Mascota {
    constructor(nombre, especie, edad, vacunado = true) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.vacunado = vacunado;
    }
    cumplirAnios() {

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
}

class Veterinario {
    constructor(nombre, especialidad, numColegiado, enServicio = true) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.numColegiado = numColegiado;
        this.enServicio = enServicio;
    }

    atender() {

    }

    cambiarTurno() {

    }

    toString() {
        const ul = document.createElement('ul');
        const liNombre = document.createElement('li');
        const liEspecialidad = document.createElement('li');
        const liColegiado = document.createElement('li');
        const liEnservicio = document.createElement('li');

        liNombre.textContent = this.nombre;
        liEspecialidad.textContent = this.especialidad;
        liColegiado.textContent = this.numColegiado;
        liEnservicio.textContent = this.enServicio;
        ul.append(liNombre, liEspecialidad, liColegiado, liEnservicio);
        return ul;
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

divSalida.innerHTML += mascota1.obtenerFicha();
divSalida.innerHTML += mascota2.obtenerFicha();
divSalida.innerHTML += mascota3.obtenerFicha();

divSalida.innerHTML += '<h2>Veterinarios</h2>';

divSalida.appendChild(vet1);
