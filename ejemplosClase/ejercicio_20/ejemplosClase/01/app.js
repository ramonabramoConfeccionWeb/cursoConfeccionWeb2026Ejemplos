class Alumno {

    constructor(nombre, edad, nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    };

    aprobado() {
        return this.nota >= 5;
    };
}

const alumno1 = new Alumno('ramon', 50, 8);
const alumno2 = new Alumno('silvia', 20, 10);

console.log(alumno1, alumno2);