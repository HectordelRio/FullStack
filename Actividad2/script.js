
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
    }

    editar(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

class GestorDeTareas   {
    constructor() {
    this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
    }
}

const gestor = new GestorDeTareas();

const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");


btnAgregar.addEventListener("click", () => {
    if (inputTarea.value === "") {
     alert("Escribe una tarea");
        return;
    }

    const nuevaTarea = new Tarea(inputTarea.value);
    gestor.agregarTarea(nuevaTarea);
    inputTarea.value = "";
    mostrarTareas();
});

function mostrarTareas() {
    listaTareas.innerHTML = "";

    gestor.tareas.forEach((tarea, index) => {
        listaTareas.innerHTML += `
            <li>
                ${tarea.nombre}
                <button onclick="editarTarea(${index})">Editar</button>
                <button onclick="eliminarTarea(${index})">Eliminar</button>
            </li>
        `;
    });
}

function editarTarea(index) {
    const nuevoNombre = prompt("Editar tarea:");
    if (nuevoNombre) {
        gestor.tareas[index].editar(nuevoNombre);
        mostrarTareas();
    }
}
function eliminarTarea(index) {
    gestor.eliminarTarea(index);
    mostrarTareas();
}

