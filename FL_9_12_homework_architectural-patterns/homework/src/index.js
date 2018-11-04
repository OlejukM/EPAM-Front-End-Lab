import {createStore} from 'redux';
import {date} from './data';
import {styles} from './style.scss'

let defaultState = date;
let displayInfo = document.getElementById('displayInfo');
let searchInput = document.getElementById('searchInput');
let count = 0;
let employeesTable = document.getElementById('employeesTable');
let butId;
let till = 5;
let nextState = defaultState;


function reducer(currentState, action) {
    switch (action.type) {
        case 'ADD':
            if (count < nextState.length) {
                createNewElements(nextState, count, till);
                till = till + 5;
            }
            count = count + 5;
            break;
        case 'DEL':
            removeRow(nextState);
            break;
        case 'FIND':
            count = 1;
            till = 5;
            return 'df';
        default:
            return currentState;
    }
}

const store = createStore(reducer, defaultState);
store.subscribe(render);

function render() {
    console.log('in render');
    displayInfo.innerHTML = `Display ${count} users out of ${nextState.length}`
    if (count === nextState.length) {
        loadMoreButton.display = 'none';
    }
}

let loadMoreButton = document.getElementById('loadMoreButton');
loadMoreButton.addEventListener('click', function () {
    store.dispatch({type: 'ADD'})
});

searchInput.addEventListener('change', function (e,) {
    e.preventDefault();
    store.dispatch({type: 'FIND'})
});


function filter(obj, name) {

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].name !== name) {
            let rotToRemove = document.getElementById(i);
            rotToRemove.style.display = 'none';
        }
    }
}

function removeRow(obj) {
    nextState = obj.filter((item) => item.id !== butId);
    console.log(nextState);
    let rotToRemove = document.getElementById(butId);
    rotToRemove.style.display = 'none';
    count = count - 1;
    till = till - 1;
}

function createNewElements(curState, count, till) {

    for (count; count < till; count++) {
        let row = document.createElement('tr');
        row.id = curState[count].id;
        employeesTable.appendChild(row);

        let columnPhoto = document.createElement('td');
        let img = document.createElement('img');
        img.src = curState[count].picture;
        columnPhoto.appendChild(img);

        let columnName = document.createElement('td');
        columnName.innerHTML = curState[count].name;

        let columnAddress = document.createElement('td');
        columnAddress.innerHTML = curState[count].location;

        let columnEmail = document.createElement('td');
        columnEmail.innerHTML = curState[count].email;

        let columnPhone = document.createElement('td');
        columnPhone.innerHTML = curState[count].phone;

        let columnTimezone = document.createElement('td');
        columnTimezone.innerHTML = curState[count].timezone;

        let columnActions = document.createElement('td');
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        removeButton.id = curState[count].id;
        removeButton.className = 'removeButton';
        removeButton.addEventListener('click', function () {
            butId = removeButton.id;
            store.dispatch({type: 'DEL'})
        });
        columnActions.appendChild(removeButton);

        row.appendChild(columnPhoto);
        row.appendChild(columnName);
        row.appendChild(columnAddress);
        row.appendChild(columnEmail);
        row.appendChild(columnPhone);
        row.appendChild(columnTimezone);
        row.appendChild(columnActions);
    }
}