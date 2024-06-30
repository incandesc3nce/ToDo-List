import showTodo from "../builders/showTodo";
import showTodoDialog from "../dialogs/showTodoDialog";

export default function showTodos(project) {
  const content = document.getElementById("content");
  
  const heading = document.createElement("h2");
  heading.textContent = "To Do's ";

  const buttonSpan = document.createElement("span");

  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "+";
  addTodoButton.setAttribute("id", "add-todo");
  
  buttonSpan.appendChild(addTodoButton);
  
  heading.appendChild(buttonSpan);
  
  const list = document.createElement("ul");
  list.setAttribute("id", "list");
  
  content.appendChild(heading);
  content.appendChild(list);
  
  addTodoButton.addEventListener("click", () => {
    showTodoDialog();
  });
  
  for (let projectTodo of project.todos) {
    showTodo(projectTodo, project);
  }
}
