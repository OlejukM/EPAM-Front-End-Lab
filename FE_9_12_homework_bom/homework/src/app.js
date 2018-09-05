const rootNode = document.getElementById('root');

let addTask = '<h1>Add Task</h1>';
let inputForm = '<input type="text"></input>';

const todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

// Your code goes here
let el = document.getElementById('add');
if (el){
    el.addEventListener('click', function () {
        let rootDiv = document.getElementById('content');
        rootDiv.innerHTML = addTask;
        rootDiv.innerHTML = inputForm;
    })
}


// rootNode.appendChild( /* Append your list item node*/ );F