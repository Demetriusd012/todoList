//Variables
const todoInput = document.querySelectorAll('.todoInput');
const todoButton = document.querySelector('.todoButton');
const filterTodo = document.querySelector('.filterTodo');
const todoContainer = document.querySelector('.todoContainer');
const todoList = document.querySelector('.todoList');
const head = document.querySelectorAll('h1');
const todos = todoList.children;

//Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addItem);
todoList.addEventListener('click', deleteItem);
filterTodo.addEventListener('change', switchList);
todoList.addEventListener('click', completeItem);
// todoList.addEventListener('click', function () {
//   console.log('Oh no! The entire ul executes');
//   todoList.classList.toggle('fade');
// })


//Functions
function addItem(event) {
  event.preventDefault();

  const newItem = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const completeBtn = document.createElement('button');
  const todos = document.createElement('div');
  // const items = todos.children;
  //Add Inner Text
  completeBtn.innerHTML = ('<i class="fas fa-check"></i>');
  deleteBtn.innerHTML = ('<i class="fas fa-trash"></i>');
  newItem.innerText = todoInput[0].value;
  //Add Class List
  deleteBtn.classList.add('delete');
  newItem.classList.add('item');
  completeBtn.classList.add('complete');
  todos.classList.add('todos');
  // console.log(todoInput[0].value);
  //Append children
  todoList.appendChild(todos);
  todos.appendChild(newItem);
  todos.appendChild(completeBtn);
  todos.appendChild(deleteBtn);
  //add Local Storage
  saveLocalTodos(todoInput[0].value);
  console.log(todos.children[0].innerHTML);
  todoInput[0].value = '';
}

function deleteItem(event) {
  event.preventDefault();
  event.stopPropagation();
  
  item = event.target;
  if(item.classList[0]==='delete') {
    item.parentElement.remove();
    console.log('delete');
    console.log(item.parentElement);
    removeLocalTodos(event.target.parentElement.firstElementChild.innerText);
  }

}

function switchList(event) {
  
  for (HTMLCollection of todos) {
    console.log(todos);
    console.log(HTMLCollection);
    switch(event.target.value) {
      case 'all':
        
        HTMLCollection.style.display = 'grid';
        localStorage.getItem('todos');
        console.log('all');
        break;
      case 'completed':
        if (HTMLCollection.classList.contains('completed')) {
          console.log('switch completed worked!');
          HTMLCollection.style.display = 'grid';
        } else {
          HTMLCollection.style.display = 'none';
        }
        
        break;
        
      case 'uncompleted':
        if(HTMLCollection.classList.contains('completed')){
          HTMLCollection.style.display = 'none';
        } else {
          HTMLCollection.style.display = 'grid';
        }
          console.log('uncompleted');
          break;
          
          default:
            console.log('all');
            
          }
        }
}
      
function completeItem(event) {
  event.preventDefault();
  event.stopPropagation();
  const item = event.target;
  if(item.classList[0]==='complete') {
    item.previousElementSibling.classList.toggle('fade');
    item.parentElement.classList.toggle('completed');
    console.log('complete');
  console.log(item);
  }
}
    
//Local Storage

function saveLocalTodos(thing) {
  let things;
  if (localStorage.getItem('things') === null){
    things = [];
  } else {
    things = JSON.parse(localStorage.getItem('things'));
  }
  things.push(thing);
  localStorage.setItem('things', JSON.stringify(things));
}

function getTodos(event){
  let things;
  if (localStorage.getItem('things') === null){
    things = [];
  } else {
    things =  JSON.parse(localStorage.getItem('things'));
  }
  for (thing of things) {
    console.log(thing);
    const newItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completeBtn = document.createElement('button');
    const todos = document.createElement('div');
    
    //Add Inner Text
    completeBtn.innerHTML = ('<i class="fas fa-check"></i>');
    deleteBtn.innerHTML = ('<i class="fas fa-trash"></i>');
    newItem.innerText = thing;
    //Add Class List
    deleteBtn.classList.add('delete');
    newItem.classList.add('item');
    completeBtn.classList.add('complete');
    todos.classList.add('todos');
   
    //Append children
    todoList.appendChild(todos);
    todos.appendChild(newItem);
    todos.appendChild(completeBtn);
    todos.appendChild(deleteBtn);
    
  }
  
}
function saveLocalTodos(thing) {
  let things;
  if (localStorage.getItem('things') === null){
    things = [];
  } else {
    things = JSON.parse(localStorage.getItem('things'));
  }
  things.push(thing);
  localStorage.setItem('things', JSON.stringify(things));
}
function removeLocalTodos(thing) {
  
  let things;
  if (localStorage.getItem('things') === null) {
    things = [];
  } else {
    things = JSON.parse(localStorage.getItem('things'));
  }
  // localStorage.removeItem(event.target.parentElement.firstElementChild.innerText);
  todoIndex = things.indexOf(thing);

  console.log(things.indexOf(thing));
  things.splice(things.indexOf(thing),1);
  
  localStorage.setItem('things', JSON.stringify(things));
}
