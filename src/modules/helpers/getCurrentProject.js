import { getActiveProject } from "./activeProject";
import { projectsContainer } from "../projectContainer";

export default function getCurrentProject() {
  const activeProject = getActiveProject();
  const projectTitle = activeProject.textContent;

  return projectsContainer.getProjects().findIndex(project => project.title === projectTitle);
}