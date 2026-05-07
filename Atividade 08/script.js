const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const textInput = taskInput.value.trim()
  if(textInput !== ''){
    const newTask = document.createElement('li');
    newTask.innerHTML = `<span>${textInput}</span>`;
    
    newTask.innerHTML =
      `<span>${textInput}</span>
       <button onclick="editar(this)">Editar</button>
       <button onclick="remover(this)">Remover</button>
       <button onclick="concluir(this)">Concluir</button>
      `
    taskList.appendChild(newTask);
  }
}

function remover(button){
  const taskToRemove = button.parentElement;
  taskList.removeChild(taskToRemove);
}

function editar(button){
  const taskToEdit = button.parentElement;
  
}

function concluir(button){
  const taskToConclude = button.parentElement;
  if (taskToConclude.classList.toggle('completed')){
    button.innnerHTML = `Desmarcar`;
  }else{
    button.innerHTML = `Concluir`;
  }
}
