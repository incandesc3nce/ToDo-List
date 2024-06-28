function getActiveProject() {
  return document.querySelector(".active-project");
}

export default function setActiveProject(project) {
  const activeProject = getActiveProject();
  if (activeProject) {
    activeProject.classList.remove("active-project");
  }
  project.classList.add("active-project");
}