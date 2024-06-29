import './index.html';
import './style.css';
import showProject from './modules/builders/showProject';
import showProjectDialog from './modules/dialogs/showProjectDialog';
import showTodoDialog from './modules/dialogs/showTodoDialog';
import { projectsContainer } from './modules/projectContainer';

projectsContainer.getProjects().forEach(project => {
  showProject(project);
})

const addProjectButton = document.getElementById('add-project');
addProjectButton.addEventListener('click', showProjectDialog);