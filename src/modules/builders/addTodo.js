import getPriorityCircle from "../helpers/getPriorityCircle";

export default function addTodo(todo) {
  const todoList = document.getElementById("list");
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");

  const todoDetails = document.createElement("details");

  const todoSummary = document.createElement("summary");
  
  const todoTitle = document.createElement("h3");
  todoTitle.textContent = `${todo.title}`;
  todoSummary.appendChild(todoTitle);
  todoDetails.appendChild(todoSummary);
  todoDetails.classList.add("todo-upper");

  const dueDate = document.createElement("p");
  dueDate.textContent = `${todo.dueDate}`;
  todoSummary.appendChild(dueDate);

  const priority = document.createElement("p");
  priority.textContent = `${getPriorityCircle(todo.priority)} ${todo.priority}`;
  todoSummary.appendChild(priority);

  const done = document.createElement("div");
  done.classList.add("done-container");

  const doneCheckbox = document.createElement("input");
  doneCheckbox.classList.add("done");
  doneCheckbox.setAttribute("type", "checkbox");
  doneCheckbox.setAttribute("name", "done");
  const doneLabel = document.createElement("label");
  doneLabel.textContent = "Done";
  doneLabel.setAttribute("for", "done");
  doneLabel.classList.add("done-label"); 

  done.appendChild(doneLabel);
  done.appendChild(doneCheckbox);

  doneCheckbox.addEventListener("change", () => {
    todo.toggleDone();
  });

  doneCheckbox.checked = todo.done;
  
  todoSummary.appendChild(done);

  
  todoElement.appendChild(todoDetails);
  
  const todoDescription = document.createElement("p");
  todoDescription.textContent = `${todo.description}`;
  todoDetails.appendChild(todoDescription);
  
  const notes = document.createElement("div");
  const notesTitle = document.createElement("h4");
  notesTitle.textContent = "Notes:";

  const notesText = document.createElement("p");
  notesText.textContent = `${todo.notes}`;

  if (todo.notes !== "" && todo.notes !== undefined) {
    notes.appendChild(notesTitle);
    notes.appendChild(notesText);

    todoDetails.appendChild(notes);
  }
  
  todoDetails.appendChild(notes);



  todoList.appendChild(todoElement);
}