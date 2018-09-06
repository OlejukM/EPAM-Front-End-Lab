let removeIcon = '<i class="material-icons" id="del">delete</i>';
let completeIcon =
  '<i class="material-icons" id="crop-square">check_box_outline_blank</i>';
let doneIcon = '<i class="material-icons" id="doneImg">check_box</i>';
let itemCounter = 0;
let maxItems = 10;
let firstNumberOfList = 0;
let el = document.getElementById('add');
if (el) {
  el.addEventListener('click', function () {
    let value = document.getElementById('item').value;
    if (value) {
      addItemTodo(value);
    }
  });
}

function removeItem() {
  let item = this.parentNode;
  let parent = item.parentNode;
  itemCounter--;
  if (itemCounter <= maxItems) {
    document.getElementById('item').disabled = false;
    document.getElementById('add').disabled = false;
  }

  parent.removeChild(item);
}

function completeItem() {
  let item = this;
  item = item.innerHTML = doneIcon;
}

function addItemTodo(text) {
  let list = document.getElementById('todo');

  let item = document.createElement('li');
  item.innerText = text;
  itemCounter++;
  if (itemCounter >= maxItems) {
    document.getElementById('item').disabled = true;
    document.getElementById('add').disabled = true;
  }

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;
  remove.addEventListener('click', removeItem);

  let complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeIcon;
  complete.addEventListener('click', completeItem);

  item.appendChild(remove);
  item.appendChild(complete);

  list.insertBefore(item, list.childNodes[firstNumberOfList]);
}