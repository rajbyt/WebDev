function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      ${taskText}
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  }
  
  function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const taskItem = button.parentElement;
  
    // Animation for removal
    taskItem.style.animation = "fade 0.5s";
    setTimeout(() => {
      taskList.removeChild(taskItem);
    }, 500);
  }
  