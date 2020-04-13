function addBtn() {
    var task = document.getElementById("taskValue").value;
    //if not empty and example validation
    if (task.length > 3 && /\S/.test(task)) {
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