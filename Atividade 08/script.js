const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const textInput = taskInput.value.trim()
  if(textInput !== ''){
    const newTask = document.createElement('li');
    
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
  const taskText = taskToEdit.querySelector('span'); 

  const newText = prompt('Edite sua tarefa...', taskText.textContent); 
  taskText.textContent = newText;
  //diferença entre innerHTML e textContent, inner lê não só o texto mas os elementos, ex: <span>oi</span>, textContent pega apenas o texto, ex: oi.
  //o prompt é parecido com aqueles métodos de alert e confirm, abre um campo de digitação para depois dar uma confirmação
  //então foi criada uma nova var para receber o novo texto, desse campo (prompt), o conteudo antigo da var taskText recebe o newText.
}

function concluir(button){
  const taskToConclude = button.parentElement;
  
  if (taskToConclude.classList.toggle('completed')){
    button.innerHTML = `Desmarcar`;
  }else{
    button.innerHTML = `Concluir`;
  }
}
