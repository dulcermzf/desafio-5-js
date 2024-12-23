const input = document.querySelector('.input-tarea')
const total = document.getElementById('total')
const realizadas = document.getElementById('realizadas')
const contTablaTareas = document.getElementById('lista-tareas')

const tareas = [
    { id: 1, tarea: 'Hacer desayuno', completada: true },
    { id: 2, tarea: 'Trabajar', completada: true },
    { id: 3, tarea: 'Estudiar', completada: false },
]

function templateTarea(tarea) {
    return `<tr> 
        <td>${tarea.id}</td> 
        <td>${tarea.tarea}</td> 
        <td><input type="checkbox" ${tarea.completada ? 'checked' : ''} onclick="tareaCompletada(${tarea.id})"></td> 
        <td><button onclick="borrarTarea(${tarea.id})">X</button></td>
    </tr>`
}

function tareaCompletada(id) {
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id)

    tareas[tareaIndex].completada = !tareas[tareaIndex].completada
    mostrarResultados()
}

function mostrarResultados() {
    total.innerHTML = tareas.length
    realizadas.innerHTML = tareas.filter(tarea => tarea.completada).length
}

function listarTareas() {
    let template = ''
    for(const tarea of tareas) {
        template += templateTarea(tarea)
    }

    contTablaTareas.innerHTML = template
    mostrarResultados()
}

function agregarTarea() {
    const tarea = {
        id: tareas.length + 1,
        tarea: input.value,
        completada: false
    }

    tareas.push(tarea)

    listarTareas()
}

function borrarTarea(id) {
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id)

    tareas.splice(tareaIndex, 1)

    listarTareas()
}

listarTareas()