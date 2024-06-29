import removeDialog from "../helpers/removeDialog";
import createProject from "../builders/createProject";
import showProject from "../builders/showProject";
import { projectsContainer } from "../projectContainer";

export default function showProjectDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "project-dialog");

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute('placeholder', 'Untitled');
  title.setAttribute('autofocus', 'true');
  title.setAttribute('maxlength', '25');

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";
  
  
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
  form.appendChild(buttons);

  dialog.appendChild(form);

  const body = document.querySelector("body");
  body.appendChild(dialog);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let title = formData.get("title");
    if (title === "") {
      title = "Untitled";
    }
    if (title) {
      const newProject = createProject(title);
      projectsContainer.addProject(newProject);
      showProject(newProject);
    }
    dialog.close();
  });

  cancel.addEventListener("click", () => dialog.close());

  dialog.addEventListener("close", () => removeDialog(dialog));

  dialog.showModal();
}