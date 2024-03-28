// script.js
import Student from './student.js';

let filterBySettings = {
    'column': 'id',
    'desc': true,
}
let isFirstLoad = true

const displayStudents = async function() {
    return Student.allStudent().then(function(response) {
        response.sort((a, b) => {
            const isNumber = typeof a[filterBySettings.column] === 'number';

            // SORT NUMBERS
            if (isNumber) {
                if (filterBySettings.desc) {
                    return b[filterBySettings.column] - a[filterBySettings.column];
                }

                return a[filterBySettings.column] - b[filterBySettings.column];  
            }

            // SORT STRINGS
            if (filterBySettings.desc) {
                return b[filterBySettings.column].localeCompare(a[filterBySettings.column]);
            }

            return a[filterBySettings.column].localeCompare(b[filterBySettings.column]);
        });

        return response.map((data) => {
            const { id, name, date, note } = data;
            const student = new Student(name, date, note);

            return `<tr>
                    <td>${id}</td>
                    <td>${student.name}</td>
                    <td>${student.getAge()} ans</td>
                    <td><span class="badge rounded-pill ${student.isAdmitted() ? 'text-bg-success' : 'text-bg-danger'}">${student.note} / ${Student.MAX_NOTE}</span></td>
                    <td><button class='btn btn-danger btn-sm delete' data-id='${id}'>Supprimer</button></td>
                </tr>`;
        });
    });
};

const addStudent = (event) => {
    event.preventDefault();
    const [name, date, note] = document.querySelectorAll('#name, #date, #note');
    const student = new Student(name.value, date.value, note.value);
    student.addStudent();
};

window.deleteStudent = (id) => {
    Student.deleteStudent(id);
};

const renderStudent = function() {
    const body = document.querySelector('.liste-etudiants');
    displayStudents().then((data) => {
        body.innerHTML = data.join(' ');
        if (isFirstLoad) {
            init();
        }
        isFirstLoad = false;
    });
};

const init = function() {
    const refreshButton = document.querySelector('#refresh');
    const addButton = document.querySelector('#add');
    const deleteHtmlButtons = document.querySelectorAll('.delete');
    const sortElementHtmlButtons = document.querySelectorAll('.sort-element');

    refreshButton.addEventListener('click', () => {
        renderStudent();
    });
    
    addButton.addEventListener('click', (event) => {
        addStudent(event);
    });
    
    deleteHtmlButtons.forEach((button) => {
        button.addEventListener('click', () => {
            window.deleteStudent(button.dataset.id);
        });
    });
    
    sortElementHtmlButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterBySettings.column = button.dataset.column;
            toggleSortDirection();
        });
    });
};

window.renderSort = (column) => {
    if (filterBySettings.column === column) {
        const element = document.querySelector(`.sort-element[data-column="${column}"] span`);
        element.innerHTML = `<button class='btn fw-bold'>${filterBySettings.desc ? '&darr;' : '&uarr;'}</button>`;
    }
};

renderSort('id');
renderSort('name');
renderSort('date');
renderSort('note');

window.clearSortIcons = () => {
    document.querySelectorAll('.sort-element span').forEach(span => {
        span.innerHTML = '';
    });
};

window.toggleSortDirection = () => {
    clearSortIcons();
    filterBySettings.desc = !filterBySettings.desc;
    renderSort(filterBySettings.column);
    renderStudent();
};

renderStudent();
