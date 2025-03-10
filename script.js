const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");
const addTaskButton = document.querySelector(".add-task-button");

function inputNewTask() {
    if (taskInput.value === "") {
        return;
    }

    const taskItem = document.createElement("li"); // 插入新 HTML 標籤
    taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <label>${taskInput.value}</label>
        <button class="delete-task">🗑</button>
    `;

    const deleteTaskButton = taskItem.querySelector(".delete-task");
    const taskCheckbox = taskItem.querySelector(".task-checkbox");

    deleteTaskButton.addEventListener("click", function () {
        taskItem.remove();
    });

    taskCheckbox.addEventListener("change",function(){
        if (taskCheckbox.checked){
            taskItem.style.textDecoration = "line-through";
            taskItem.style.color = "#999";
            taskList.append(taskItem);
        }else {
            taskItem.style.textDecoration = "none";
            taskItem.style.color = "";
            taskList.prepend(taskItem);
        }
    })

    taskList.append(taskItem);
    taskInput.value = "";
}

addTaskButton.addEventListener("click", inputNewTask);

taskInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        inputNewTask();
    }
});
