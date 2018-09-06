// const rootNode = document.getElementById('root');

const todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

let el = document.getElementById('add');
if (el) {
    el.addEventListener('click', function () {
        let rootDiv = document.getElementById('content');
        clearDiv(rootDiv);
        addElement(rootDiv);

        let btnEvent = document.getElementsByClassName('btnSave');
        if (btnEvent) {
            btnEvent.addEventListener('click', function () {
                let rootDiv = document.getElementById('content');
                clearDiv(rootDiv);
                addItemsTodo(rootDiv);
            })
        }
    })
}


function addElement(rootDiv) {
    let h = document.createElement('H1');
    let t = document.createTextNode('Add task');
    h.appendChild(t);

    let input = document.createElement('INPUT');
    rootDiv.appendChild(h);
    rootDiv.appendChild(input);

    let div = document.createElement('div');
    rootDiv.appendChild(div);

    let btn = document.createElement('button');

    let btnText = document.createTextNode('Cancel');

    btn.className = 'btnCancel'
    btn.appendChild(btnText);
    rootDiv.appendChild(btn);

    let btn2 = document.createElement('button');
    btn2.className = 'btnSave'

    let btnText2 = document.createTextNode('Save Changes');
    btn2.appendChild(btnText2);
    rootDiv.appendChild(btn2);
}

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function addItemsTodo(rootDiv) {
    let h = document.createElement('H1');
    let t = document.createTextNode('Simple TODO Application');
    h.appendChild(t);
    rootDiv.appendChild(h);
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add new task');
    btn.appendChild(btnText);
    rootDiv.appendChild(btn);
}





// rootNode.appendChild( /* Append your list item node*/ );F