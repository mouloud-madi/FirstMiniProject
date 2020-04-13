function addBtn() {
    var task = document.getElementById("taskValue").value;
    //if not empty and example validation
    if (task.length > 3 && /\S/.test(task)) {
        addNewTask(task);
        document.getElementById("taskValue").value = "";
        document.getElementById("errMessage").innerHTML = "";
        document.getElementById("taskValue").classList.remove('is-invalid');
    } else if (task.length > 0 && task.length <= 3) {
        document.getElementById("errMessage").innerHTML = "This field must contain more than 3 characters";
        document.getElementById("taskValue").classList.add('is-invalid');
    } else {
        document.getElementById("errMessage").innerHTML = "This field is required";
        document.getElementById("taskValue").classList.add('is-invalid');
    }
}

function addNewTask(element) {
    var list = document.getElementById("todoList"),
        todoItem = document.createElement('div'),
        newItem = document.createElement("li");

    newItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    newItem.innerText = element;
    //creates remove button
    var remove = document.createElement("button");
    remove.classList.add('btn', 'btn-danger', 'btn-sm');
    remove.innerHTML = 'Delete';
    todoItem.appendChild(remove);
    newItem.appendChild(todoItem);
    //insert new todo before the first element
    list.insertBefore(newItem, list.childNodes[0]);
}