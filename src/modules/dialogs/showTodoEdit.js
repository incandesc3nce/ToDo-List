import removeDialog from "../helpers/removeDialog";
import { format } from "date-fns";
import getPriorityCircle from "../helpers/getPriorityCircle";
import { storageHandler } from "../localStorage/storage";
import { projectsContainer } from "../projectContainer";

export default function showTodoEdit(todo) {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "todo-edit-dialog");

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute('placeholder', `${todo.title}`);
  title.setAttribute('value', `${todo.title}`);
  title.setAttribute('autofocus', 'true');
  title.setAttribute('maxlength', '25');

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";

  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("name", "due-date");
  dueDate.setAttribute('min', new Date().toISOString().split('T')[0]);
  dueDate.setAttribute('value', new Date().toISOString().split('T')[0]);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date";

  const priority = document.createElement("select");

  const priorityOptions = ["Low", "Medium", "High"];
  for (let i = 0; i < priorityOptions.length; i++) {
    const option = document.createElement("option");
    option.value = priorityOptions[i];
    option.textContent = priorityOptions[i];
    if (priorityOptions[i] === todo.priority) {
      option.selected = true;
    }
    priority.appendChild(option);
  }
  priority.setAttribute("name", "priority");
  priority.setAttribute('value', `${todo.priority}`);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";

  const description = document.createElement("textarea");
  description.setAttribute("name", "description");
  description.setAttribute('placeholder', `${todo.description}`);
  description.textContent = `${todo.description}`;
  description.setAttribute('maxlength', '100');

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description";

  const notes = document.createElement("textarea");
  notes.setAttribute("name", "notes");
  notes.setAttribute('placeholder', `${todo.notes}`);
  notes.textContent = `${todo.notes}`;
  notes.setAttribute('maxlength', '100');

  const notesLabel = document.createElement("label");
  notesLabel.setAttribute("for", "notes");
  notesLabel.textContent = "Notes";

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const cancel = document.createElement("button");
  cancel.setAttribute("type", "button");
  cancel.textContent = "Cancel";

  const save = document.createElement("button");
  save.setAttribute("type", "submit");
  save.textContent = "Save";

  buttons.appendChild(cancel);
  buttons.appendChild(save);

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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const list = document.querySelectorAll(".todo");
    list.forEach((li) => {
      if (li.firstChild.firstChild.firstChild.textContent === todo.title) {
        li.firstChild.firstChild.firstChild.textContent = title.value;
        li.firstChild.firstChild.firstChild.nextSibling.textContent = format(dueDate.value, "dd.MM.yyyy");
        li.firstChild.firstChild.firstChild.nextSibling.nextSibling.textContent = `${getPriorityCircle(priority.value)} ${priority.value}`;
        li.firstChild.firstChild.nextSibling.textContent = description.value;
        li.firstChild.firstChild.nextSibling.nextSibling.firstChild.nextSibling.textContent = notes.value;
      }
    })

    todo.title = title.value;
    todo.dueDate = dueDate.value;
    todo.priority = priority.value;
    todo.description = description.value;
    todo.notes = notes.value;

    storageHandler.setProjects(projectsContainer.getProjects());
    dialog.close();
  });

  cancel.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener('close', () => removeDialog(dialog));

  dialog.appendChild(form);

  const body = document.querySelector("body");
  body.appendChild(dialog);

  dialog.showModal();
}