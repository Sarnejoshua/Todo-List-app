function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(taskInput.value));

  var deleteButton = document.createElement("span");
  deleteButton.appendChild(document.createTextNode("x"));
  deleteButton.className = "delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);
    updateLocalStorage();
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";

  updateLocalStorage();
}
function updateLocalStorage() {
  var taskList = document.getElementById("taskList");
  var tasks = [];
  for (var i = 0; i < taskList.children.length; i++) {
    tasks.push(taskList.children[i].textContent);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  var taskList = document.getElementById("taskList");
  var storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    var tasks = JSON.parse(storedTasks);

    for (var i = 0; i < tasks.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(tasks[i]));

      var deleteButton = document.createElement("span");
      deleteButton.appendChild(document.createTextNode("x"));
      deleteButton.className = "delete";
      deleteButton.onclick = function() {
        taskList.removeChild(li);
        updateLocalStorage();
      };
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  }
}
window.onload = function() {
  loadTasks();
};
