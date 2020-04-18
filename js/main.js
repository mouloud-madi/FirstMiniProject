/************Add text to todo list*******************/
function addBtn(event) {
    if (event.which == 13 || event.button == 0) { 
    var task = document.getElementById("taskValue").value;
    //if not empty and example validation
    if (task.length > 3) {
        document.getElementById("taskValue").value = "";
        document.getElementById("errMessage").innerHTML = "";
        document.getElementById("taskValue").classList.remove('is-invalid');
        addNewTask(task);
    } else if (task.length > 0 && task.length <= 3) {
        document.getElementById("errMessage").innerHTML = "This field must contain more than 3 characters";
        document.getElementById("taskValue").classList.add('is-invalid');
    } else {
        document.getElementById("errMessage").innerHTML = "This field is required";
        document.getElementById("taskValue").classList.add('is-invalid');
    }

    }
}
 /*************Add new item to todo list*************/
function addNewTask(element) {
    var list = document.getElementById("todoList"),
        todoItem = document.createElement('div'),
        newItem = document.createElement("li");

    newItem.classList.add('list-group');
    newItem.innerText = element;
    //creates remove button
    var remove = document.createElement("button");
    remove.classList.add('btn-delete');
    remove.innerHTML = 'Delete';
    //Call the function removeItem with event click
    remove.addEventListener('click', removeItem);
    todoItem.appendChild(remove);
    newItem.appendChild(todoItem);
    //insert new todo before the first element
    list.insertBefore(newItem, list.childNodes[0]);
}
/**************Remove item with confirmation dialogue*******************/
function removeItem() {
    var confirmation = confirm("Want to delete ?"),
        item = this.parentNode.parentNode, //targeting li
        parent = item.parentNode; //targeting ul
    if (confirmation) {
        parent.removeChild(item);
    }
}