let tasks = []; // Array to store tasks

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const taskText = taskInput.value.trim();
    const taskDescription = descriptionInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        description: taskDescription,
        completed: false,
        timestamp: new Date().toLocaleString()
    };

    // Add the new task to the tasks array
    tasks.push(newTask);
    taskInput.value = "";
    descriptionInput.value = "";
    renderTasks(); // Render the updated tasks
}

// Function to toggle task completion
function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks(); // Render the updated tasks
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(); // Render the updated tasks
}

// Function to render tasks based on filter
function renderTasks(filter = 'all') {
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";

    let filteredTasks = tasks;
    if (filter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    // Loop through the filtered tasks and create list items for each task
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task");
        if (task.completed) {
            li.classList.add("completed");
        }

        // Create a checkbox element
        const checkbox = document.createElement("span");
        checkbox.classList.add("checkbox");
        checkbox.innerHTML = task.completed ? '<i class="fa fa-toggle-on"></i>' : '<i class="fa fa-toggle-off"></i>';
        checkbox.addEventListener("click", () => toggleTaskCompletion(task.id));

        // Create a span element for the task text
        const text = document.createElement("span");
        text.textContent = task.text;

        // Create a paragraph element for the task description
        const description = document.createElement("p");
        description.textContent = task.description;

        // Create a span element for the task timestamp
        const timestamp = document.createElement("span");
        timestamp.textContent = task.timestamp;

        // Create a delete button element
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa fa-close"></i>';
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        // Append all elements to the list item
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(description);
        li.appendChild(timestamp);
        li.appendChild(deleteButton);

        // Append the list item to the tasks list
        tasksList.appendChild(li);
    });
}

// Function to show all tasks
function showAllTasks() {
    renderTasks('all');
}

// Function to show pending tasks
function showPendingTasks() {
    renderTasks('pending');
}

// Function to show completed tasks
function showCompletedTasks() {
    renderTasks('completed');
}

// Initially show all tasks
showAllTasks();
