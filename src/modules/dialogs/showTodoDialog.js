import removeDialog from "../helpers/removeDialog";
import createTodo from "../builders/createTodo";
import showTodo from "../builders/showTodo";
import { projectsContainer } from "../projectContainer";
import getCurrentProject from "../helpers/getCurrentProject";
import { storageHandler } from "../localStorage/storage";

export default function showTodoDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "todo-dialog");

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute('placeholder', 'Untitled');
  title.setAttribute('autofocus', 'true');
  title.setAttribute('maxlength', '25');

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "due-date");
  dueDate.setAttribute('min', new Date().toISOString().split('T')[0]);
  dueDate.setAttribute("value", new Date().toISOString().split('T')[0]);
  dueDate.required = true;

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date";


  const priority = document.createElement("select");
  priority.setAttribute("name", "priority");
  priority.defaultValue = "Low";

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";

  const priorityOptions = ["Low", "Medium", "High"];

  for (let i = 0; i < priorityOptions.length; i++) {
    const option = document.createElement("option");
    option.value = priorityOptions[i];
    option.textContent = priorityOptions[i];
    priority.appendChild(option);
  }


  
  const description = document.createElement("textarea");
  description.setAttribute("name", "description");
  description.setAttribute('maxlength', '100');
  description.setAttribute('placeholder', 'No description');
  description.setAttribute('rows', '5');
  description.setAttribute('cols', '50');
  description.setAttribute('maxlength', '200');
  
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description";
  
  
  const notes = document.createElement("textarea");
  notes.setAttribute("name", "notes");
  notes.setAttribute('maxlength', '100');
  notes.setAttribute('rows', '5');
  notes.setAttribute('cols', '50');
  notes.setAttribute('maxlength', '100');

  const notesLabel = document.createElement("label");
  notesLabel.setAttribute("for", "notes");
  notesLabel.textContent = "Notes";


  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const add = document.createElement("button");
  add.setAttribute("type", "submit");
  add.textContent = "Add";

  const cancel = document.createElement("button");
  cancel.setAttribute("type", "button");
  cancel.textContent = "Cancel";

  buttons.appendChild(cancel);
  buttons.appendChild(add);


  form.appendChild(titleLabel);
  form.appendChild(title);

  form.appendChild(dueDateLabel);
  form.appendChild(dueDate);

  form.appendChild(priorityLabel);
  form.appendChild(priority);

  form.appendChild(descriptionLabel);
  form.appendChild(description);

  form.appendChild(notesLabel);
  form.appendChild(notes);

  form.appendChild(buttons);

  dialog.appendChild(form);

  const body = document.querySelector("body");
  body.appendChild(dialog);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (title.value === "") {
      title.value = "Untitled";
    }
    if (description.value === "") {
      description.value = "No description";
    }

    const todo = createTodo(title.value, description.value, dueDate.value, priority.value, notes.value);
    showTodo(todo);
    projectsContainer.getProject(getCurrentProject()).addTodo(todo);

    storageHandler.setProjects(projectsContainer.getProjects());
    dialog.close();
  });

  cancel.addEventListener("click", () => dialog.close());

  dialog.addEventListener("close", () => removeDialog(dialog));


  dialog.showModal();
}