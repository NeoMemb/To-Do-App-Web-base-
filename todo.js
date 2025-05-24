const inputBar = document.querySelector("input.input-bar");
const addBtn = document.querySelector("button.add-task");
const taskList = document.querySelector("ol.task-list");
let checkBtn, taskText;

//  When the user types a task and clicks "Add" =>
//        Get the task value
//        Save it to an array
//        Save the updated array in localStorage
//        Display all tasks on the page

// 1. Load tasks from localStorage
//                        obj || array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let done = JSON.parse(localStorage.getItem("done")) || [];
displayTasks();

// 2. Add task
addBtn.addEventListener("click", () => {
  taskText = inputBar.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    inputBar.value = ""; // Clear input
    saveTasks("tasks", tasks);
    displayTasks();
  }
});


// Setting the 'Enter' key button
inputBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    taskText = inputBar.value.trim();
    if (taskText !== "") {
      tasks.push(taskText);
      inputBar.value = ""; // Clear input
      saveTasks("tasks", tasks);
      displayTasks();
    }
    }
});

checkBtn.addEventListener("change", (e) =>{
  if (e.target.checked){
    // saveTasks("done", e.parentElement.innerHTML)
    console.log(e.parentElement);
  }
});

function saveTasks(a, b) {
  // saveTasks: save a json file stringify
// @a: the key
// @b: the value to bestringify
  localStorage.setItem(a, JSON.stringify(b));
}

// 4. Display tasks
function displayTasks() {
  // Clear existing items in the <ol>...</ol>
  taskList.innerHTML = "";

  // Then iterate in each items of obj || array
  tasks.forEach((taskItem, index) => {

    // ALL THESE WILL BE WHAT WILL BE DISPLAYED, WHEN ADD TASK BTN IS CLICKED

    // Create list in the <ol>...</ol> and give it content of the i-th item of the array
    const li = document.createElement("li");
    li.textContent = taskItem;

    // Create a button for del
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "del-btn";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks("tasks", tasks);
      displayTasks();
    };

    checkBtn = document.createElement("input");

    const attributes = {
      type: "checkbox",
      class: "check-box"
    };

    for (let key in attributes){
      checkBtn.setAttribute(key, attributes[key]);
    }

    li.appendChild(deleteBtn);
    li.appendChild(checkBtn);
    taskList.appendChild(li);
  });
}
