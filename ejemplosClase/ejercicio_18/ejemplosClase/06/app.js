/**
 * Tengo que construir un menú desplegable con los elementos del array menu
 * <ul>
 *     <li><a href="#">Inicio</a></li>
 *     <li><a href="#">About</a></li>
 *     <li><a href="#">Contact</a></li>
 * </ul> 
 */

const menu = [
    {
        etiqueta: 'Inicio',
        url: '#'
    },
    {
        etiqueta: 'About',
        url: '#'
    },
    {
        etiqueta: 'Contact',
        url: '#'
    }
];



// crea un menu con innerHTML
function renderMenuTexto(menu) {
    let salida = '<ul>';
    menu.forEach((elemento) => {
        salida += `<li><a href="${elemento.url}">${elemento.etiqueta}</a></li>`;
    });
    salida += '</ul>';
    return salida;
}

// crear un menu con createElement
function renderMenuElement(menu) {
    const ul = document.createElement('ul');
    menu.forEach((elemento) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = elemento.url;
        a.textContent = elemento.etiqueta;
        li.appendChild(a);
        ul.appendChild(li);
    });
    return ul;
}

const menuTotal = {
    menu: [
        {
            etiqueta: 'Inicio',
            url: '#'
        },
        {
            etiqueta: 'About',
            url: '#'
        },
        {
            etiqueta: 'Contact',
            url: '#'
        }
    ],
    // crea un menu con innerHTML
    renderMenuTexto() {
        let salida = '<ul>';
        this.menu.forEach((elemento) => {
            salida += `<li><a href="${elemento.url}">${elemento.etiqueta}</a></li>`;
        });
        salida += '</ul>';
        return salida;
    },

    // crear un menu con createElement
    renderMenuElement() {
        const ul = document.createElement('ul');
        this.menu.forEach((elemento) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = elemento.url;
            a.textContent = elemento.etiqueta;
            li.appendChild(a);
            ul.appendChild(li);
        });
        return ul;
    }
};


// apunto al objeto donde voy a insertar el menú
const navegacion = document.querySelector('nav');

// opcion 1: innerHTML
// navegacion.innerHTML = renderMenuTexto(menu);
navegacion.innerHTML = menuTotal.renderMenuTexto();

// opcion2 : createElement
// navegacion.appendChild(renderMenuElement(menu));
navegacion.appendChild(menuTotal.renderMenuElement());





