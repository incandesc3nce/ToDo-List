import './index.html';
import './style.css';
import showProject from './modules/builders/showProject';

import { projectsContainer } from './modules/projectContainer';
import { storageHandler } from './modules/localStorage/storage';
import showProjectDialog from './modules/dialogs/showProjectDialog';

storageHandler.start();

document.querySelector("#add-project").addEventListener("click", () => {
  showProjectDialog();
})

projectsContainer.getProjects().forEach(project => {
  showProject(project);
})