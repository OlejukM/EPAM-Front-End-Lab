let removeIcon = '<img src="assets/img/remove-s.jpg">';
let checkIcon = '<img src="assets/img/todo-s.png">';
let completeIcon = '<img src="assets/img/done-s.png">';
let firstNumberOfList = 0;
let todoList = document.createElement('ul');
document.getElementById('addItem').style.display = 'none';
document.getElementById('modify').style.display = 'none';
let addBtn = document.getElementById('add-todo-btn');
if (addBtn) {
  addBtn.addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('addItem').style.display = 'block';
  });
}

let el = document.getElementById('addChanges');
if (el) {
  el.addEventListener('click', function() {
    let value = document.getElementById('inputTodo').value;
    if (value) {
      addItemTodo(value);
    }
  });
}

function removeItem() {
  let item = this.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  let item = this;
  item = item.innerHTML = completeIcon;
}

function addItemTodo(text) {
  let list = document.getElementById('todoList');
  let item = document.createElement('li');
  item.innerText = text;
  document.getElementById('main-page').style.display = 'block';
  document.getElementById('addItem').style.display = 'none';
  document.getElementById('emptyTodo').style.display = 'none';
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;
  remove.addEventListener('click', removeItem);

  let check = document.createElement('button');
  check.classList.add('check');
  check.innerHTML = checkIcon;
  check.addEventListener('click', completeItem);

  item.appendChild(remove);
  item.appendChild(check);

  list.insertBefore(item, todoList.childNodes[firstNumberOfList]);
}
