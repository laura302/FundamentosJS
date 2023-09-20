const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');

const tareas = [];

function addTarea(){
    const dato = inputTarea.value;
    if(dato){
        tareas.push(dato);
        inputTarea.value = '';
        showTareas();
    }
}

function showTareas(){
    const tareasLi = tareas.map(tarea => `<li>${tarea}</li>`);
    listaTareas.innerHTML = tareasLi.join('');
}