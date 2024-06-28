export default function addProject(project) {
  const projectList = document.getElementById("projects");
  const projectElement = document.createElement("button");
  projectElement.classList.add("project");
  projectElement.textContent = project.title;
  projectList.appendChild(projectElement);
}