import { getActiveProject } from "./activeProject";
import { projects } from "../projectContainer";

export default function getCurrentProject() {
  const activeProject = getActiveProject();
  const projectTitle = activeProject.textContent;

  return projects.findIndex(project => project.title === projectTitle);
}