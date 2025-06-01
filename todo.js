const inputBar = document.querySelector("input.input-bar");
const addBtn = document.querySelector("button.add-task");
const taskList = document.querySelector("ol.task-list");
const doneList = document.querySelector("ul.done-tasks");
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
addBorder(taskList);
displayTasks(taskList, tasks);

// 2. Add task
addBtn.addEventListener("click", () => {
  taskText = inputBar.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    inputBar.value = ""; // Clear input
    saveTasks("tasks", tasks);
    displayTasks(taskList, tasks);
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
      displayTasks(taskList, tasks);
    }
    }
});

//  ******** FUNCTIONS **********

// 4. Display tasks
//Changes to be done(1 & 2 done!!!):
  //  a. Change every "taskList" --> "to"
  //  b. Then "tasks" --> "from"
  //  c. Update everywhere the function is called
  
// function displayTasks(to, from) {
function displayTasks(to, from) {
  // Clear existing items in the <ol>...</ol>

  
  to.innerHTML = "";

  // Then iterate in each items of obj || array
  from.forEach((taskItem, index) => {

    // ALL THESE WILL BE WHAT WILL BE DISPLAYED, WHEN ADD TASK BTN IS CLICKED

    // Create list in the <ol>...</ol> and give it content of the i-th item of the array
    const li = document.createElement("li");
    li.textContent = taskItem;

    // Create a button for del
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete ";
    deleteBtn.className = "del-btn";
    deleteBtn.onclick = () => {
      if (confirm("Do you want to delete this?"))
      {
        from.splice(index, 1);
        saveTasks("tasks", tasks);
        addBorder(to);
        displayTasks(to, from);
      }
    };

    // check-btn for each li
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
    to.appendChild(li);
  });
  addBorder(to);
}
if (checkBtn.checked){
  done.push(target.parentElement);
  saveTasks(done, "done");
  checkBtn.parentElement.remove();
  displayTasks(taskList, tasks);
  displayTasks(doneList, done);
}
displayTasks(doneList, done);

function addBorder(l){
  if (l.children.length !== 0)
  {
    //  I want to do something more here
    l.style.border = "2px solid grey";
    l.style.borderRadius = ".5em";
  }
  taskList.parentElement.style.border = "none";
}
function saveTasks(a, b) {
// saveTasks: save a json file stringify
// @a: the key
// @b: the value to bestringify
  localStorage.setItem(a, JSON.stringify(b));
}
