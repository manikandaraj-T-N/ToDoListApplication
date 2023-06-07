const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

// Step 7: Add event listener to the form element on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Step 9: Create the addTodo() function
function addTodo() {
  let todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUl.appendChild(todoEl);
    input.value = "";

    updateLS();
  }
}

// Step 11: Create the updateLS() function
function updateLS() {
  const todosEl = document.querySelectorAll(".todos li");

  const todos = [];

  todosEl.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}


const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}
