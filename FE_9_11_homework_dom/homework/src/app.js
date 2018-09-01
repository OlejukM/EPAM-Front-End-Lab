let rootNode = document.getElementById('root');
let el = document.getElementById('add');
if(el){
    el.addEventListener('click', function () {
    let value = document.getElementById('item').value;
    if (value) {
 addItemTodo(value); 
}
});
}

function addItemTodo(text) {
    let list = document.getElementById('todo');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    remove.classList.add('remove');

    let complete = document.createElement('button');
    complete.classList.add('complete');

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.appendChild(item);
}
rootNode.appendChild();