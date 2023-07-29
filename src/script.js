function removeTask(task) {
    task.parentNode.parentNode.remove();
}

function closeTask(task) {
    task = task.parentNode.parentNode;
    if (task.classList.contains("closed-task")) {
        task.classList.remove("closed-task");
    } else {
        task.classList.add("closed-task");
    }
}

function addTask() {
    let manager = document.getElementById("manager");
    let taskName = prompt("Enter the name of the task:");
    manager.innerHTML += `
        <div class="task">
            <p>${taskName}</p>
            <div class="task-options">
                <ion-icon class="option" name="checkbox-outline" onclick="closeTask(this)"></ion-icon>
                <ion-icon class="option" name="trash-outline" onclick="removeTask(this)"></ion-icon>
            </div>
        </div>
    `;
}