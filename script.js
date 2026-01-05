 const taskInput = document.getElementById("task-input");
 const taskList = document.getElementById("task-list");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      li.onclick = function () {
        li.classList.toggle("completed");
      };

      taskList.appendChild(li);
      taskInput.value = "";
    }