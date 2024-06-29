import showTodos from "../helpers/showTodos";
import clearList from "../helpers/clearList";
import setActiveProject from "../helpers/activeProject";
import { storageHandler } from "../localStorage/storage";
import { projectsContainer } from "../projectContainer";

export default function showProject(project) {
  const projectList = document.getElementById("projects");
  
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectElement = document.createElement("button");
  projectElement.classList.add("project");
  projectElement.textContent = project.title;
  
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-project");
  deleteButton.textContent = "⮾";

  projectContainer.appendChild(projectElement);
  projectContainer.appendChild(deleteButton);
  projectList.appendChild(projectContainer);

  projectElement.addEventListener("click", () => {
    clearList(document.getElementById("content"));
    showTodos(project);
    setActiveProject(projectElement);
  });

  deleteButton.addEventListener("click", () => {
    projectList.removeChild(projectContainer);
    projectsContainer.removeProject(project);
    clearList(document.getElementById("content"));
    storageHandler.setProjects(projectsContainer.getProjects());
  });
}