import showTodos from "../helpers/showTodos";
import clearList from "../helpers/clearList";
import setActiveProject from "../helpers/activeProject";

export default function showProject(project) {
  const projectList = document.getElementById("projects");
  const projectElement = document.createElement("button");
  projectElement.classList.add("project");
  projectElement.textContent = project.title;
  projectList.appendChild(projectElement);

  projectElement.addEventListener("click", () => {
    clearList(document.getElementById("list"));
    showTodos(project);
    setActiveProject(projectElement);
  });
}